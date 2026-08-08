import "server-only";
import { getSupabase } from "./supabase";

const BUCKET = "site-images";
let bucketReady: Promise<void> | null = null;

async function ensureBucket() {
  const supabase = getSupabase();
  const { data: existing } = await supabase.storage.getBucket(BUCKET);
  if (existing) return;

  const { error } = await supabase.storage.createBucket(BUCKET, {
    public: true,
    fileSizeLimit: "5MB",
    allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"],
  });
  // Ignore "already exists" races from concurrent requests.
  if (error && !/already exists/i.test(error.message)) {
    throw new Error(error.message);
  }
}

function extensionFor(mimeType: string) {
  switch (mimeType) {
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    default:
      return "jpg";
  }
}

export async function uploadImage(file: File, folder: string): Promise<string> {
  const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
  if (!ALLOWED.includes(file.type)) {
    throw new Error("Only PNG, JPEG, WEBP or SVG images are allowed.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Image must be 5MB or smaller.");
  }

  if (!bucketReady) bucketReady = ensureBucket();
  await bucketReady;

  const supabase = getSupabase();
  const path = `${folder}/${crypto.randomUUID()}.${extensionFor(file.type)}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const { error } = await supabase.storage.from(BUCKET).upload(path, bytes, {
    contentType: file.type,
    upsert: false,
  });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

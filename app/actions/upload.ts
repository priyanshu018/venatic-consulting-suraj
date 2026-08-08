"use server";

import { verifySession } from "@/lib/dal";
import { uploadImage } from "@/lib/storage";

export async function uploadImageAction(formData: FormData) {
  await verifySession();

  const file = formData.get("file");
  const folder = String(formData.get("folder") ?? "uploads");

  if (!(file instanceof File) || file.size === 0) {
    return { error: "No file selected." };
  }

  try {
    const url = await uploadImage(file, folder);
    return { success: true as const, url };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "Upload failed.",
    };
  }
}

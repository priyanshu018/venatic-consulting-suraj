import "server-only";
import { cache } from "react";
import { getSupabase } from "./supabase";

// Fetches one editable content section by key, falling back to the given
// default (normally the matching static export from app/components/content.ts)
// if the row doesn't exist yet or Supabase isn't configured.
export const getSection = cache(async <T,>(key: string, fallback: T): Promise<T> => {
  try {
    const { data, error } = await getSupabase()
      .from("site_content")
      .select("value")
      .eq("key", key)
      .maybeSingle();

    if (error || !data) return fallback;
    return data.value as T;
  } catch {
    return fallback;
  }
});

export async function updateSection(key: string, value: unknown) {
  const { error } = await getSupabase()
    .from("site_content")
    .upsert(
      { key, value: value as never, updated_at: new Date().toISOString() },
      { onConflict: "key" }
    );

  if (error) throw new Error(error.message);
}

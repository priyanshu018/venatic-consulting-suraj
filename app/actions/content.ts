"use server";

import { verifySession } from "@/lib/dal";
import { updateSection } from "@/lib/content-db";

export async function updateContentSection(key: string, value: unknown) {
  await verifySession();

  try {
    await updateSection(key, value);
    return { success: true as const };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "Something went wrong.",
    };
  }
}

"use server";

import { verifySession } from "@/lib/dal";
import { updateStats } from "@/lib/stats";

export type UpdateStatsState = { error?: string; success?: boolean } | undefined;

function parseNonNegativeInt(value: FormDataEntryValue | null, label: string) {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
    throw new Error(`${label} must be a whole number that isn't negative.`);
  }
  return n;
}

export async function updateStatsAction(
  _prevState: UpdateStatsState,
  formData: FormData
): Promise<UpdateStatsState> {
  await verifySession();

  try {
    const countries = parseNonNegativeInt(formData.get("countries"), "Countries");
    const projects = parseNonNegativeInt(formData.get("projects"), "Projects");
    const clients = parseNonNegativeInt(formData.get("clients"), "Clients");

    await updateStats({ countries, projects, clients });
    return { success: true };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Something went wrong." };
  }
}

import "server-only";
import { cache } from "react";
import { getSupabase } from "./supabase";

export type SiteStats = {
  countries: number;
  projects: number;
  clients: number;
};

const DEFAULT_STATS: SiteStats = { countries: 2, projects: 25, clients: 20 };

export const getStats = cache(async (): Promise<SiteStats> => {
  try {
    const { data, error } = await getSupabase()
      .from("site_stats")
      .select("countries, projects, clients")
      .eq("id", 1)
      .maybeSingle();

    if (error || !data) return DEFAULT_STATS;
    return data as SiteStats;
  } catch {
    // Supabase not configured yet (e.g. local dev) — fall back to defaults
    // so the site still renders.
    return DEFAULT_STATS;
  }
});

export async function updateStats(data: SiteStats) {
  const { error } = await getSupabase()
    .from("site_stats")
    .upsert({ id: 1, ...data, updated_at: new Date().toISOString() });

  if (error) throw new Error(error.message);
}

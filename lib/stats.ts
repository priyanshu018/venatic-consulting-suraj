import "server-only";
import { cache } from "react";
import { query } from "./db";

export type SiteStats = {
  countries: number;
  projects: number;
  clients: number;
};

const DEFAULT_STATS: SiteStats = { countries: 2, projects: 25, clients: 20 };

export const getStats = cache(async (): Promise<SiteStats> => {
  try {
    const { rows } = await query<SiteStats>(
      "select countries, projects, clients from site_stats where id = 1"
    );
    return rows[0] ?? DEFAULT_STATS;
  } catch {
    // DB not configured yet (e.g. local dev without DATABASE_URL) — fall back
    // to sensible defaults so the site still renders.
    return DEFAULT_STATS;
  }
});

export async function updateStats(data: SiteStats) {
  await query(
    `insert into site_stats (id, countries, projects, clients, updated_at)
     values (1, $1, $2, $3, now())
     on conflict (id) do update set
       countries = excluded.countries,
       projects = excluded.projects,
       clients = excluded.clients,
       updated_at = now()`,
    [data.countries, data.projects, data.clients]
  );
}

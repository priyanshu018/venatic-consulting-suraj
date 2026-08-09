import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

declare global {
  var _supabaseAdmin: SupabaseClient | undefined;
}

// Server-only client using the service role key — bypasses Row Level
// Security, so it must never be imported from a "use client" file. The
// `server-only` import above makes that a build error if it happens.
export function getSupabase(): SupabaseClient {
  if (global._supabaseAdmin) return global._supabaseAdmin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY (see .env.local.example)."
    );
  }

  global._supabaseAdmin = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return global._supabaseAdmin;
}

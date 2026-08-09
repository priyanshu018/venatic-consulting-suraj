import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

declare global {
  var _supabaseAdmin: SupabaseClient | undefined;
}

function maskSecret(value: string | undefined) {
  if (!value) return null;
  if (value.length <= 10) return `${value.slice(0, 2)}***${value.slice(-2)}`;
  return `${value.slice(0, 6)}...${value.slice(-6)}`;
}

// Server-only client using the service role key — bypasses Row Level
// Security, so it must never be imported from a "use client" file. The
// `server-only` import above makes that a build error if it happens.
export function getSupabase(): SupabaseClient {
  if (global._supabaseAdmin) return global._supabaseAdmin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const preferredKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
  const fallbackKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const serviceRoleKey = preferredKey ?? fallbackKey;
  const keySource = preferredKey
    ? "NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY"
    : fallbackKey
      ? "SUPABASE_SERVICE_ROLE_KEY"
      : "missing";

  console.info("Supabase env check", {
    hasUrl: Boolean(url),
    urlHost: url ? new URL(url).host : null,
    keySource,
    hasPreferredKey: Boolean(preferredKey),
    hasFallbackKey: Boolean(fallbackKey),
    keyPreview: maskSecret(serviceRoleKey),
  });

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

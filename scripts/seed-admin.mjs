// Run with: pnpm seed:admin
// Requires the schema in sql/schema.sql to already be applied via the
// Supabase SQL Editor (supabase-js can read/write rows but can't create
// tables). Requires NEXT_PUBLIC_SUPABASE_URL,
// NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY, ADMIN_EMAIL, ADMIN_PASSWORD.
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import * as content from "../app/components/content.ts";

const {
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
} = process.env;

const serviceRoleKey = NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? SUPABASE_SERVICE_ROLE_KEY;

if (!NEXT_PUBLIC_SUPABASE_URL || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY. Copy .env.local.example to .env.local (or .env) and fill it in."
  );
  process.exit(1);
}
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Missing ADMIN_EMAIL / ADMIN_PASSWORD.");
  process.exit(1);
}
if (ADMIN_PASSWORD.length < 8) {
  console.error("ADMIN_PASSWORD should be at least 8 characters.");
  process.exit(1);
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function assertNoSchemaError(error, table) {
  if (!error) return;
  if (error.code === "42P01" || /relation .* does not exist/i.test(error.message)) {
    console.error(
      `\nTable "${table}" doesn't exist yet. Open the Supabase SQL Editor and run sql/schema.sql first.\n`
    );
    process.exit(1);
  }
  throw new Error(`${table}: ${error.message}`);
}

// 1. Admin user
const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
const email = ADMIN_EMAIL.trim().toLowerCase();

const { error: userError } = await supabase
  .from("admin_users")
  .upsert({ email, password_hash: passwordHash }, { onConflict: "email" });
assertNoSchemaError(userError, "admin_users");
console.log(`Admin user "${email}" created/updated.`);

// 2. Default stats (only if the row doesn't exist yet)
const { error: statsError } = await supabase
  .from("site_stats")
  .upsert(
    { id: 1, countries: 2, projects: 25, clients: 20 },
    { onConflict: "id", ignoreDuplicates: true }
  );
assertNoSchemaError(statsError, "site_stats");
console.log("Default stats seeded (skipped if already present).");

// 3. Every editable content section — seeded from the current defaults in
// app/components/content.ts. Existing rows are left untouched so this never
// clobbers edits made from the admin panel.
const sections = {
  hero: content.hero,
  hero_features: content.heroFeatures,
  services: content.services,
  tax_consulting: content.taxConsulting,
  outsourcing: content.outsourcing,
  app_dev: content.appDev,
  app_security: content.appSecurity,
  case_studies: content.caseStudies,
  industries: content.industries,
  partners: content.partners,
  who_we_work_with: content.workWithCards,
  testimonials: content.testimonials,
  contact: content.contact,
};

const rows = Object.entries(sections).map(([key, value]) => ({ key, value }));
const { error: contentError } = await supabase
  .from("site_content")
  .upsert(rows, { onConflict: "key", ignoreDuplicates: true });
assertNoSchemaError(contentError, "site_content");
console.log(`Seeded ${rows.length} content sections (skipped any already present).`);

console.log("\nDone. Sign in at /admin/login.");

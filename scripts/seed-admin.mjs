// Run with: pnpm seed:admin
// Requires DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD in .env.local (loaded via --env-file).
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const { DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!DATABASE_URL) {
  console.error("Missing DATABASE_URL. Copy .env.local.example to .env.local and fill it in.");
  process.exit(1);
}
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Missing ADMIN_EMAIL / ADMIN_PASSWORD in .env.local.");
  process.exit(1);
}
if (ADMIN_PASSWORD.length < 8) {
  console.error("ADMIN_PASSWORD should be at least 8 characters.");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schema = readFileSync(path.join(__dirname, "../sql/schema.sql"), "utf-8");

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: DATABASE_URL.includes("sslmode=disable") ? false : { rejectUnauthorized: false },
});

try {
  await pool.query(schema);

  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const email = ADMIN_EMAIL.trim().toLowerCase();

  await pool.query(
    `insert into admin_users (email, password_hash)
     values ($1, $2)
     on conflict (email) do update set password_hash = excluded.password_hash`,
    [email, passwordHash]
  );

  console.log(`Schema ready. Admin user "${email}" created/updated.`);
} finally {
  await pool.end();
}

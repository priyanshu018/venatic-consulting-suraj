This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Admin panel (live stats)

The Countries / Projects / Clients numbers shown on the site are editable from
`/admin` instead of being hardcoded. Without any setup, the site falls back to
default numbers (2 / 25 / 20) and the admin panel is unusable — you need a
Postgres database to actually manage them.

1. **Get a Postgres database.** Any provider works (this repo doesn't need
   anything special) — [Neon](https://neon.tech) and
   [Supabase](https://supabase.com) both have free tiers and give you a
   connection string in under a minute. On Vercel, use your provider's
   **pooled** connection string (e.g. Neon's `-pooler` host, or Supabase's
   port `6543`) since serverless functions open a lot of short-lived
   connections.
2. **Copy the env file:** `cp .env.local.example .env.local` and fill in:
   - `DATABASE_URL` — the connection string from step 1.
   - `SESSION_SECRET` — a random secret for signing the admin login session.
     Generate one with `openssl rand -base64 32`.
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the login you'll use to sign in to
     `/admin`. These two are only read by the seed script below, not by the
     running app.
3. **Create the schema and the admin login:**
   ```bash
   pnpm seed:admin
   ```
   This creates the `admin_users` and `site_stats` tables if they don't
   exist yet, seeds `site_stats` with the default numbers, and creates (or
   updates) the admin account from `ADMIN_EMAIL` / `ADMIN_PASSWORD`.
4. **Sign in at [http://localhost:3000/admin](http://localhost:3000/admin/login)**
   and update the numbers. Changes apply immediately on the live site.

Re-run `pnpm seed:admin` any time to reset the admin password, or to point a
new environment (e.g. production) at the same credentials — it's safe to run
repeatedly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

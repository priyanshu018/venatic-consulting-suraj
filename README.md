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

## Admin panel (Supabase-backed CMS)

Almost every section of the site — hero copy, the 4 service cards, US Tax
pricing, outsourcing, application development, application security, success
stories, industries, "Who We Work With", testimonials, and all contact
info — is editable from `/admin` instead of being hardcoded. The 3 headline
stats (Countries / Projects / Clients) live there too. Without any setup, the
site falls back to the defaults baked into `app/components/content.ts` and
the admin panel is unusable — you need Supabase configured to actually manage
any of it.

1. **Create a Supabase project** at [supabase.com](https://supabase.com) (free
   tier is fine). From **Settings → API**, grab the Project URL, the `anon`
   key, and the `service_role` key.
2. **Apply the schema.** supabase-js can read/write rows but can't create
   tables, so open **SQL Editor → New query** in the Supabase dashboard,
   paste the contents of [`sql/schema.sql`](sql/schema.sql), and run it. This
   creates `admin_users`, `site_stats`, and `site_content` (the generic
   per-section store everything above lives in).
3. **Copy the env file:** `cp .env.local.example .env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` — from step 1.
     **Do not** prefix the service role key with `NEXT_PUBLIC_` — that tells
     Next.js to ship it to the browser, and it bypasses all database
     security. See the comments in `.env.local.example` for details.
   - `SESSION_SECRET` — a random secret for signing the admin login session.
     Generate one with `openssl rand -base64 32`.
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the login you'll use to sign in to
     `/admin`. Only read by the seed script below, not by the running app.
4. **Seed the admin login and default content:**
   ```bash
   pnpm seed:admin
   ```
   This creates (or updates) the admin account, and seeds every content
   section with the current defaults from `content.ts` — but only rows that
   don't exist yet, so re-running it never overwrites edits made from the
   admin panel.
5. **Sign in at [http://localhost:3000/admin](http://localhost:3000/admin/login)**
   and edit away. Changes apply immediately on the live site — nothing to
   redeploy.

A few things are intentionally **not** editable from the admin panel yet:
photos (hero background, case study images, "Who We Work With" cards, the
real logo files) and the partner/client logos, since none of that has file
upload wired up — those still live in `public/` and `content.ts`. Service
card icons and industry icons are also assigned by position in code, so
reordering or adding items beyond the icon set reuses the first/a fallback
icon.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

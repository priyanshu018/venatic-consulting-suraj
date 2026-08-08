-- Run this once in the Supabase SQL Editor (Project → SQL Editor → New query)
-- before running `pnpm seed:admin`. supabase-js can read/write rows but can't
-- create tables, so schema changes have to be applied here manually.

create table if not exists admin_users (
  email text primary key,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists site_stats (
  id int primary key,
  countries int not null default 0,
  projects int not null default 0,
  clients int not null default 0,
  updated_at timestamptz not null default now()
);

insert into site_stats (id, countries, projects, clients)
values (1, 2, 25, 20)
on conflict (id) do nothing;

-- Generic per-section content store. Each row is one editable section of the
-- site (hero copy, service descriptions, pricing tables, etc.) as JSON, so
-- new sections can be added from the admin panel without new migrations.
create table if not exists site_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- These tables are only ever read/written by server-side code using the
-- Supabase service role key, which bypasses Row Level Security entirely.
-- Row Level Security is enabled with no policies below purely as
-- defense-in-depth, so the tables stay inaccessible even if the anon key
-- were ever used against them by mistake.
alter table admin_users enable row level security;
alter table site_stats enable row level security;
alter table site_content enable row level security;

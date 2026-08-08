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

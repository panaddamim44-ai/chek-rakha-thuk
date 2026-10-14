-- Future persistence schema. Not required for demo mode.
create table products (id bigint generated always as identity primary key, canonical_key text unique, brand text, model text, variant text, condition text, created_at timestamptz default now());
create table offers (id bigint generated always as identity primary key, product_id bigint references products(id), source text not null default 'shopee', shop_id text, item_id text, shop_name text, title text not null, price_min numeric(12,2), price_max numeric(12,2), variant_verified boolean not null default false, product_url text, offer_url text, fetched_at timestamptz default now(), unique(shop_id,item_id));
create table price_snapshots (id bigint generated always as identity primary key, offer_id bigint references offers(id), price_min numeric(12,2), captured_at timestamptz default now());
create table affiliate_links (id bigint generated always as identity primary key, offer_id bigint references offers(id), affiliate_url text not null, status text not null default 'active', created_at timestamptz default now());
create table click_events (id bigint generated always as identity primary key, offer_id bigint references offers(id), created_at timestamptz default now());
create table search_logs (id bigint generated always as identity primary key, query text not null, created_at timestamptz default now());
create table api_sync_jobs (id bigint generated always as identity primary key, status text not null, error_message text, created_at timestamptz default now());
-- RLS: deny anonymous access by default; enable RLS before exposing tables via Supabase client.
alter table products enable row level security;alter table offers enable row level security;alter table price_snapshots enable row level security;alter table affiliate_links enable row level security;alter table click_events enable row level security;alter table search_logs enable row level security;alter table api_sync_jobs enable row level security;

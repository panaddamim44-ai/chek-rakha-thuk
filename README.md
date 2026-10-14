# เช็กราคาถูก v2

Next.js 15 responsive website inspired by the **workflow** of price-checking services, with original branding and copy.

## Features
- Mobile-first homepage, Shopee link input, clipboard paste, category navigation, feature explanations, sticky mobile input.
- `/api/check` accepts only allowlisted HTTPS Shopee hosts and explicitly returns **no product/price/affiliate URL** until an authorized API is integrated.
- No scraping, invented prices, coupons, or fake affiliate links.

## Deployment
1. Replace the old GitHub repo contents with this project. **Delete obsolete** `app/style.css`, `app/api/search/route.ts`, `lib/catalog.ts`, `lib/shopee.ts` if no longer used. Keep your old repo as a backup or create a branch first.
2. Commit changes. Vercel will redeploy automatically. Framework: Next.js, root `./`.
3. Set `SHOPEE_MODE=demo` (optional; current route is deliberately safe regardless of environment).
4. Test homepage and `POST /api/check` with `{ "url": "https://shopee.co.th/..." }`.

## After official API approval
Review the Shopee Thailand Affiliate Open API documentation for your account, implement a server-side adapter in `lib/shopee.ts` with exact supported operations and authentication, validate product and pricing data, and implement affiliate link generation. Store secrets in Vercel Environment Variables only, never GitHub or browser code. Implement rate limiting, caching, price-history persistence and privacy disclosures as appropriate.

This release does **not** retrieve live Shopee prices and does **not** convert links to affiliate links.

# เช็กราคาถูก — Shopee comparison MVP

A Next.js 15 / React 19 starter with Thai UI, safe demonstration search, a prospective Shopee Affiliate GraphQL adapter, and a Supabase SQL schema.

## Start locally
1. Install Node.js 20.9+.
2. `npm install`
3. Copy `.env.example` to `.env.local` (optional for demo).
4. `npm run dev`
5. Open http://localhost:3000

## Important status
- DEMO mode is default and uses deliberately fictional products, stores, prices, and **no purchase URLs**. Search input triggers a demonstration, not real product search.
- API access is pending. Do not set `SHOPEE_MODE=live` until Shopee Thailand approves access and you verify the endpoint, authorization and fields in your account's official API explorer.
- `lib/shopee.ts` provides the GraphQL signature, `productOfferV2` query, and a `generateShortLink` adapter. The link generator is not wired to a public endpoint until validation and caching are added. `app/api/out` deliberately refuses redirects.
- In LIVE mode the adapter reads `priceMin` (listing minimum), not SKU-level checkout price. All live offers are marked `verifiedVariant:false`; **do not claim same-product or lowest-price comparison in live mode** until matching and checkout adjustments are implemented.
- The live API may reject query fields; adjust only after inspecting your authorized Thailand schema.
- `supabase/schema.sql` is a proposed schema, not an active DB integration. Tables are private by default (RLS enabled without public policies).
- No API credentials belong in client code or source control. Never share secret keys in chat.
- Production work still needed: robust product matching, SKU-specific price validation, shipping/coupon handling, link verification, rate limiting, caching, privacy/affiliate disclosures, tracking, observability and database integration.

## Deployment
Push to GitHub and import into Vercel. Set environment variables in Vercel (keep `SHOPEE_MODE=demo` initially). Free tiers have usage limits.

## References
- Shopee TH Affiliate API application: https://help.shopee.co.th/portal/4/article/198622
- API Explorer: https://open-api.affiliate.shopee.co.id/explorer/v2 (region-specific; verify Thai endpoint)


# Trader Tax Hub — Full Website

Next.js 14 + Tailwind site ready to deploy. Includes:
- Home, Tools (upload demo), Pricing (checkout placeholder), Client Portal (access code), FAQ, Contact (forms)
- API routes: /api/upload, /api/contact, /api/subscribe, /api/portal-auth, /api/checkout
- Public downloads already included (your PDFs/XLSX)

## Quick Start
1. `npm install`
2. `npm run dev` → http://localhost:3000

## Env Variables (.env.local)
PORTAL_ACCESS_CODE=DEMO-CODE
STRIPE_CHECKOUT_URL=  # Optional: your Stripe Checkout link
NEXT_PUBLIC_CONTACT_EMAIL=calumpaveley@hotmail.com

## Production Notes
- Replace API placeholders with real integrations:
  * Uploads: S3 (AWS SDK or UploadThing)
  * Email: Resend/Postmark
  * Subscriptions: Mailchimp/ConvertKit
  * Checkout: Stripe (create Checkout Sessions server-side)
- Add SEO, analytics, and cookie consent before launch.

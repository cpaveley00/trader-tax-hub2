
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const tier = String(form.get("tier") || "");
  // In production, create a Stripe Checkout Session and return the URL.
  const url = process.env.STRIPE_CHECKOUT_URL || "https://example.com/checkout?tier=" + encodeURIComponent(tier);
  return NextResponse.redirect(url);
}

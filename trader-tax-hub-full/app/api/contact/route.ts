
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  // In production, forward to email service (Resend, Postmark) or save to DB.
  return NextResponse.json({ ok: true });
}

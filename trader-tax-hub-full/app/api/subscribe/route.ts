
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  // In production, call your ESP API (Mailchimp/ConvertKit). Demo success:
  return NextResponse.json({ ok: true });
}

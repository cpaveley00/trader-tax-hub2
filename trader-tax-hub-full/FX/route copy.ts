
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { code } = await req.json();
  const expected = process.env.PORTAL_ACCESS_CODE || "DEMO-CODE";
  if (code !== expected) return NextResponse.json({ error: "Invalid code" }, { status: 401 });
  return NextResponse.json({ ok: true });
}

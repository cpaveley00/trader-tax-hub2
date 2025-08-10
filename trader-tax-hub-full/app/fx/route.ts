import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from") || "USD";
    const to = searchParams.get("to") || "GBP";
    const amount = searchParams.get("amount") || "1";

    const upstream = await fetch(
      `https://api.exchangerate.host/convert?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(amount)}`
    );

    if (!upstream.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: upstream.status });
    }

    const data = await upstream.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch rate" }, { status: 500 });
  }
}

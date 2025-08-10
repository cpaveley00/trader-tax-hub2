
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });
  // NOTE: This is a demo. In production, upload to S3 or storage provider.
  const arrayBuffer = await file.arrayBuffer();
  const fileName = `${Date.now()}-${file.name}`;
  // We can't persist on serverless env here; return success to demo flow.
  return NextResponse.json({ message: "Received file (demo). Connect storage in production.", fileName });
}

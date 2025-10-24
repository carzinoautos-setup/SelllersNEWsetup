import { NextResponse } from "next/server";

export async function GET() {
  try {
    const key = process.env.OPENAI_API_KEY;
    const hasKey = !!key;
    const masked = key ? `${key.length} chars` : null;
    return NextResponse.json({ openai_present: hasKey, openai_key_length: masked });
  } catch (err) {
    return NextResponse.json({ error: "env check failed" }, { status: 500 });
  }
}

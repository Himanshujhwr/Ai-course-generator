import { NextResponse } from "next/server";
import { generateCourseLayout } from "@/configs/AiModel";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const text = await generateCourseLayout(prompt);

    return NextResponse.json({ text });
  } catch (err) {
    console.error("🔥 GEMINI FAILED:", err.message);
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

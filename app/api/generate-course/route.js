import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { userCourseInput } = await req.json();

    if (!userCourseInput) {
      return NextResponse.json(
        { error: "Missing userCourseInput" },
        { status: 400 }
      );
    }

    const prompt = `
Generate a Course Tutorial in JSON format.

Category: ${userCourseInput.category}
Topic: ${userCourseInput.topic}
Level: ${userCourseInput.level}
Duration: ${userCourseInput.duration}
Number of Chapters: ${userCourseInput.noOfChapters}

Return STRICT JSON only.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({
      courseLayout: JSON.parse(text),
    });
  } catch (err) {
    console.error("🔥 GENERATE COURSE ERROR:", err);
    return NextResponse.json(
      { error: "Failed to generate course" },
      { status: 500 }
    );
  }
}

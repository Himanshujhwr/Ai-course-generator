import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateCourseLayout(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "models/gemini-1.5-flash",
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

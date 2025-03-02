import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextRequest, NextResponse } from "next/server";

const geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!); // Use environment variables

export async function POST(request: Request) {
  try {
    const model = geminiAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const { prompt } = await request.json(); // Get prompt from request body

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return Response.json({ message: text });
  } catch (error) {
    console.error("Error generating content:", error);
    return Response.json({ message: error });
  }
}

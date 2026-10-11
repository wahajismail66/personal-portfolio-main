import { NextResponse } from "next/server";
import { processUserQuery } from "@/lib/chatbot-engine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message string is required" },
        { status: 400 }
      );
    }

    // Process query with internal knowledge engine
    const response = processUserQuery(message);

    return NextResponse.json({
      reply: response.reply,
      suggestions: response.suggestions || [],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

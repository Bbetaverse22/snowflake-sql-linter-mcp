import { SYSTEM_INSTRUCTIONS } from "@/components/agent/prompt";
import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages } from "ai";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    console.warn("TODO: Implement POST");
    return undefined;
}

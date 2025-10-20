import { WEB_SCRAPER_SYSTEM_INSTRUCTIONS } from "@/components/agent/web-scraper-prompt";
import { getFirecrawlMCPClient } from "@/lib/mcp";
import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, stepCountIs } from "ai";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    console.warn("TODO: Implement POST");
    return undefined;
}

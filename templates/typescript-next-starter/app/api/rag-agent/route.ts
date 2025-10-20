import { RAG_SYSTEM_INSTRUCTIONS } from "@/components/agent/rag-prompt";
import { retrieveKnowledgeBaseSimple } from "@/components/agent/tools";
import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, stepCountIs } from "ai";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    console.warn("TODO: Implement POST");
    return undefined;
}

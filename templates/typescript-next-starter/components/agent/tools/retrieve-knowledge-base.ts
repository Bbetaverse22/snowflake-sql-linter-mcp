import { tool } from "ai";
import { z } from "zod";
import { VectorizeService } from "@/lib/retrieval/vectorize";
export const {{variable-name}} = tool({
    description: "Retrieve relevant information from the knowledge base to answer questions about our services, documentation, and internal information. Use this when users ask about specific features, documentation, or need information that might be in our knowledge base.",
    inputSchema: z.object({
        query: z
            .string()
            .describe("The search query to find relevant information in the knowledge base"),
    }),
    execute: async ({ query }) => {
        console.warn("TODO: Implement this logic");
        return undefined;
    },
});

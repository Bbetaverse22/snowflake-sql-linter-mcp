import { tool } from "ai";
import { z } from "zod";
import { VectorizeService } from "@/lib/retrieval/vectorize";
export const {{variable-name}} = tool({
    description: "Search the knowledge base for information about Catan board game rules/strategies or Peruvian restaurant menu/dishes",
    inputSchema: z.object({
        query: z
            .string()
            .describe("Search query for Catan board game or Peruvian restaurant information"),
    }),
    execute: async ({ query }) => {
        console.warn("TODO: Implement this logic");
        return undefined;
    },
});

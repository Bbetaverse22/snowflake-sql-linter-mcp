import { tool } from "ai";
import { z } from "zod";
import { VectorizeService } from "@/lib/retrieval/vectorize";

export const {{variable-name}} = tool({
  description:
    "Retrieve relevant information from the knowledge base to answer questions about our services, documentation, and internal information. Use this when users ask about specific features, documentation, or need information that might be in our knowledge base.",
  inputSchema: z.object({
    query: z
      .string()
      .describe(
        "The search query to find relevant information in the knowledge base"
      ),
  }),
  execute: async ({ query }) => {
    try {
      const {{variable-name}} = new VectorizeService();

      // Retrieve relevant documents from the knowledge base
      const {{variable-name}} = await vectorizeService.retrieveDocuments(query);

      if (!documents || documents.length === 0) {
        return {
          message:
            "No relevant information found in the knowledge base for this query.",
          documentsFound: 0,
        };
      }

      // Format the context for the AI model
      const {{variable-name}} = vectorizeService.formatDocumentsForContext(documents);

      // Convert to chat sources for UI display
      const {{variable-name}} = vectorizeService.convertDocumentsToChatSources(documents);

      return {
        message: `Found ${documents.length} relevant documents in the knowledge base.`,
        documentsFound: documents.length,
        context: context,
        sources: sources,
      };
    } catch (error) {
      console.error("Error retrieving from knowledge base:", error);
      return {
        message: `Failed to retrieve information from knowledge base: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        documentsFound: 0,
      };
    }
  },
});

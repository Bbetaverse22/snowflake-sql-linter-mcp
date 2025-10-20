import { Configuration, PipelinesApi } from "@vectorize-io/vectorize-client";
import type { VectorizeDocument } from "@/types/vectorize";
import type { ChatSource } from "@/types/chat";
export class VectorizeService {
    private pipelinesApi: any;
    private organizationId: string;
    private pipelineId: string;
    constructor() {
        console.warn("TODO: Implement constructor");
    }
    async retrieveDocuments(question: string, numResults: number = 2): Promise<VectorizeDocument[]> {
        console.warn("TODO: Implement retrieveDocuments");
        return Promise.resolve(undefined);
    }
    formatDocumentsForContext(documents: VectorizeDocument[]): string {
        console.warn("TODO: Implement formatDocumentsForContext");
        return undefined;
    }
    convertDocumentsToChatSources(documents: VectorizeDocument[]): ChatSource[] {
        console.warn("TODO: Implement convertDocumentsToChatSources");
        return undefined;
    }
}

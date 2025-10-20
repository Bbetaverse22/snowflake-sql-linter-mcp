/**
 * Firecrawl MCP Client using SSE Transport
 * Documentation: https://docs.firecrawl.dev/mcp-server
 * AI SDK MCP Integration: https://ai-sdk.dev/cookbook/node/mcp-tools
 */
import { experimental_createMCPClient } from "ai";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import type { MCPClientConfig } from "./types";
export class FirecrawlMCPClient {
    private client: Awaited<ReturnType<typeof experimental_createMCPClient>> | null = null;
    private apiKey: string;
    private serverUrl: string;
    private isConnected: boolean = false;
    constructor(config: MCPClientConfig) {
        console.warn("TODO: Implement constructor");
    }
    /**
     * Initialize the MCP client connection
     */
    async connect(): Promise<void> {
        console.warn("TODO: Implement connect");
        return Promise.resolve(undefined);
    }
    /**
     * Disconnect the MCP client
     */
    async disconnect(): Promise<void> {
        console.warn("TODO: Implement disconnect");
        return Promise.resolve(undefined);
    }
    /**
     * Get all available Firecrawl tools
     * Returns tools that can be used with AI SDK's generateText/streamText
     */
    async getTools(): Promise<Record<string, any>> {
        console.warn("TODO: Implement getTools");
        return Promise.resolve(undefined);
    }
    /**
     * Get the connection status
     */
    isClientConnected(): boolean {
        console.warn("TODO: Implement isClientConnected");
        return undefined;
    }
    /**
     * Get the underlying MCP client instance
     */
    getClient() {
        console.warn("TODO: Implement getClient");
        return undefined;
    }
}
/**
 * Singleton instance for Firecrawl MCP client
 */
let firecrawlClientInstance: FirecrawlMCPClient | null = null;
/**
 * Get or create a Firecrawl MCP client instance
 */
export function getFirecrawlMCPClient(apiKey?: string): FirecrawlMCPClient {
    console.warn("TODO: Implement getFirecrawlMCPClient");
    return undefined;
}
/**
 * Reset the singleton instance (useful for testing or reconfiguration)
 */
export function resetFirecrawlMCPClient(): void {
    console.warn("TODO: Implement resetFirecrawlMCPClient");
}

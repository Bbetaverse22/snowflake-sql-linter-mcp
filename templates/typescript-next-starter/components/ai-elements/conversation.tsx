"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";
export type ConversationProps = ComponentProps<typeof StickToBottom>;
export const {{variable-name}} = ({ className, ...props }: ConversationProps) => {
    console.warn("TODO: Implement Conversation");
    return undefined;
};
export type ConversationContentProps = ComponentProps<typeof StickToBottom.Content>;
export const {{variable-name}} = ({ className, ...props }: ConversationContentProps) => {
    console.warn("TODO: Implement ConversationContent");
    return undefined;
};
export type ConversationEmptyStateProps = ComponentProps<"div"> & {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
};
export const {{variable-name}} = ({ className, title = "No messages yet", description = "Start a conversation to see messages here", icon, children, ...props }: ConversationEmptyStateProps) => {
    console.warn("TODO: Implement ConversationEmptyState");
    return undefined;
};
export type ConversationScrollButtonProps = ComponentProps<typeof Button>;
export const {{variable-name}} = ({ className, ...props }: ConversationScrollButtonProps) => {
    console.warn("TODO: Implement ConversationScrollButton");
    return undefined;
};

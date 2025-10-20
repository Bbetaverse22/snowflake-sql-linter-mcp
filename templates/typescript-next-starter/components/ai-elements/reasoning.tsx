"use client";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BrainIcon, ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { createContext, memo, useContext, useEffect, useState } from "react";
import { Response } from "./response";
type ReasoningContextValue = {
    isStreaming: boolean;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    duration: number;
};
const {{variable-name}} = createContext<ReasoningContextValue | null>(null);
const {{variable-name}} = () => {
    console.warn("TODO: Implement useReasoning");
    return undefined;
};
export type ReasoningProps = ComponentProps<typeof Collapsible> & {
    isStreaming?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    duration?: number;
};
const {{variable-name}} = 1000;
const {{variable-name}} = 1000;
export const {{variable-name}} = memo(({ className, isStreaming = false, open, defaultOpen = true, onOpenChange, duration: durationProp, children, ...props }: ReasoningProps) => {
    console.warn("TODO: Implement this logic");
    return undefined;
});
export type ReasoningTriggerProps = ComponentProps<typeof CollapsibleTrigger>;
const {{variable-name}} = (isStreaming: boolean, duration?: number) => {
    console.warn("TODO: Implement getThinkingMessage");
    return undefined;
};
export const {{variable-name}} = memo(({ className, children, ...props }: ReasoningTriggerProps) => {
    console.warn("TODO: Implement this logic");
    return undefined;
});
export type ReasoningContentProps = ComponentProps<typeof CollapsibleContent> & {
    children: string;
};
export const {{variable-name}} = memo(({ className, children, ...props }: ReasoningContentProps) => {
    console.warn("TODO: Implement this logic");
    return undefined;
});
Reasoning.displayName = "Reasoning";
ReasoningTrigger.displayName = "ReasoningTrigger";
ReasoningContent.displayName = "ReasoningContent";

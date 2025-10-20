"use client";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { ToolUIPart } from "ai";
import { CheckCircleIcon, ChevronDownIcon, CircleIcon, ClockIcon, WrenchIcon, XCircleIcon, } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { CodeBlock } from "./code-block";
export type ToolProps = ComponentProps<typeof Collapsible>;
export const {{variable-name}} = ({ className, ...props }: ToolProps) => {
    console.warn("TODO: Implement Tool");
    return undefined;
};
export type ToolHeaderProps = {
    type: ToolUIPart["type"];
    state: ToolUIPart["state"];
    className?: string;
};
const {{variable-name}} = (status: ToolUIPart["state"]) => {
    console.warn("TODO: Implement getStatusBadge");
    return undefined;
};
export const {{variable-name}} = ({ className, type, state, ...props }: ToolHeaderProps) => {
    console.warn("TODO: Implement ToolHeader");
    return undefined;
};
export type ToolContentProps = ComponentProps<typeof CollapsibleContent>;
export const {{variable-name}} = ({ className, ...props }: ToolContentProps) => {
    console.warn("TODO: Implement ToolContent");
    return undefined;
};
export type ToolInputProps = ComponentProps<"div"> & {
    input: ToolUIPart["input"];
};
export const {{variable-name}} = ({ className, input, ...props }: ToolInputProps) => {
    console.warn("TODO: Implement ToolInput");
    return undefined;
};
export type ToolOutputProps = ComponentProps<"div"> & {
    output: ToolUIPart["output"];
    errorText: ToolUIPart["errorText"];
};
export const {{variable-name}} = ({ className, output, errorText, ...props }: ToolOutputProps) => {
    console.warn("TODO: Implement ToolOutput");
    return undefined;
};

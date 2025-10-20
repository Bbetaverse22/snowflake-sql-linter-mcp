"use client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BookIcon, ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
export type SourcesProps = ComponentProps<"div">;
export const {{variable-name}} = ({ className, ...props }: SourcesProps) => {
    console.warn("TODO: Implement Sources");
    return undefined;
};
export type SourcesTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
    count: number;
};
export const {{variable-name}} = ({ className, count, children, ...props }: SourcesTriggerProps) => {
    console.warn("TODO: Implement SourcesTrigger");
    return undefined;
};
export type SourcesContentProps = ComponentProps<typeof CollapsibleContent>;
export const {{variable-name}} = ({ className, ...props }: SourcesContentProps) => {
    console.warn("TODO: Implement SourcesContent");
    return undefined;
};
export type SourceProps = ComponentProps<"a">;
export const {{variable-name}} = ({ href, title, children, ...props }: SourceProps) => {
    console.warn("TODO: Implement Source");
    return undefined;
};

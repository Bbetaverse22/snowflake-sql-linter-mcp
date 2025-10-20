"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar, } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
export type SuggestionsProps = ComponentProps<typeof ScrollArea>;
export const {{variable-name}} = ({ className, children, ...props }: SuggestionsProps) => {
    console.warn("TODO: Implement Suggestions");
    return undefined;
};
export type SuggestionProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
    suggestion: string;
    onClick?: (suggestion: string) => void;
};
export const {{variable-name}} = ({ suggestion, onClick, className, variant = "outline", size = "sm", children, ...props }: SuggestionProps) => {
    console.warn("TODO: Implement Suggestion");
    return undefined;
};

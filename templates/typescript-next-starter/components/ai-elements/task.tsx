"use client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import type { ComponentProps } from "react";
export type TaskItemFileProps = ComponentProps<"div">;
export const {{variable-name}} = ({ children, className, ...props }: TaskItemFileProps) => {
    console.warn("TODO: Implement TaskItemFile");
    return undefined;
};
export type TaskItemProps = ComponentProps<"div">;
export const {{variable-name}} = ({ children, className, ...props }: TaskItemProps) => {
    console.warn("TODO: Implement TaskItem");
    return undefined;
};
export type TaskProps = ComponentProps<typeof Collapsible>;
export const {{variable-name}} = ({ defaultOpen = true, className, ...props }: TaskProps) => {
    console.warn("TODO: Implement Task");
    return undefined;
};
export type TaskTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
    title: string;
};
export const {{variable-name}} = ({ children, className, title, ...props }: TaskTriggerProps) => {
    console.warn("TODO: Implement TaskTrigger");
    return undefined;
};
export type TaskContentProps = ComponentProps<typeof CollapsibleContent>;
export const {{variable-name}} = ({ children, className, ...props }: TaskContentProps) => {
    console.warn("TODO: Implement TaskContent");
    return undefined;
};

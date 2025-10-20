"use client";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
export type WebPreviewContextValue = {
    url: string;
    setUrl: (url: string) => void;
    consoleOpen: boolean;
    setConsoleOpen: (open: boolean) => void;
};
const {{variable-name}} = createContext<WebPreviewContextValue | null>(null);
const {{variable-name}} = () => {
    console.warn("TODO: Implement useWebPreview");
    return undefined;
};
export type WebPreviewProps = ComponentProps<"div"> & {
    defaultUrl?: string;
    onUrlChange?: (url: string) => void;
};
export const {{variable-name}} = ({ className, children, defaultUrl = "", onUrlChange, ...props }: WebPreviewProps) => {
    console.warn("TODO: Implement WebPreview");
    return undefined;
};
export type WebPreviewNavigationProps = ComponentProps<"div">;
export const {{variable-name}} = ({ className, children, ...props }: WebPreviewNavigationProps) => {
    console.warn("TODO: Implement WebPreviewNavigation");
    return undefined;
};
export type WebPreviewNavigationButtonProps = ComponentProps<typeof Button> & {
    tooltip?: string;
};
export const {{variable-name}} = ({ onClick, disabled, tooltip, children, ...props }: WebPreviewNavigationButtonProps) => {
    console.warn("TODO: Implement WebPreviewNavigationButton");
    return undefined;
};
export type WebPreviewUrlProps = ComponentProps<typeof Input>;
export const {{variable-name}} = ({ value, onChange, onKeyDown, ...props }: WebPreviewUrlProps) => {
    console.warn("TODO: Implement WebPreviewUrl");
    return undefined;
};
export type WebPreviewBodyProps = ComponentProps<"iframe"> & {
    loading?: ReactNode;
};
export const {{variable-name}} = ({ className, loading, src, ...props }: WebPreviewBodyProps) => {
    console.warn("TODO: Implement WebPreviewBody");
    return undefined;
};
export type WebPreviewConsoleProps = ComponentProps<"div"> & {
    logs?: Array<{
        level: "log" | "warn" | "error";
        message: string;
        timestamp: Date;
    }>;
};
export const {{variable-name}} = ({ className, logs = [], children, ...props }: WebPreviewConsoleProps) => {
    console.warn("TODO: Implement WebPreviewConsole");
    return undefined;
};

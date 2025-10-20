"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UIMessage } from "ai";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { ComponentProps, HTMLAttributes, ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";
type BranchContextType = {
    currentBranch: number;
    totalBranches: number;
    goToPrevious: () => void;
    goToNext: () => void;
    branches: ReactElement[];
    setBranches: (branches: ReactElement[]) => void;
};
const {{variable-name}} = createContext<BranchContextType | null>(null);
const {{variable-name}} = () => {
    console.warn("TODO: Implement useBranch");
    return undefined;
};
export type BranchProps = HTMLAttributes<HTMLDivElement> & {
    defaultBranch?: number;
    onBranchChange?: (branchIndex: number) => void;
};
export const {{variable-name}} = ({ defaultBranch = 0, onBranchChange, className, ...props }: BranchProps) => {
    console.warn("TODO: Implement Branch");
    return undefined;
};
export type BranchMessagesProps = HTMLAttributes<HTMLDivElement>;
export const {{variable-name}} = ({ children, ...props }: BranchMessagesProps) => {
    console.warn("TODO: Implement BranchMessages");
    return undefined;
};
export type BranchSelectorProps = HTMLAttributes<HTMLDivElement> & {
    from: UIMessage["role"];
};
export const {{variable-name}} = ({ className, from, ...props }: BranchSelectorProps) => {
    console.warn("TODO: Implement BranchSelector");
    return undefined;
};
export type BranchPreviousProps = ComponentProps<typeof Button>;
export const {{variable-name}} = ({ className, children, ...props }: BranchPreviousProps) => {
    console.warn("TODO: Implement BranchPrevious");
    return undefined;
};
export type BranchNextProps = ComponentProps<typeof Button>;
export const {{variable-name}} = ({ className, children, ...props }: BranchNextProps) => {
    console.warn("TODO: Implement BranchNext");
    return undefined;
};
export type BranchPageProps = HTMLAttributes<HTMLSpanElement>;
export const {{variable-name}} = ({ className, ...props }: BranchPageProps) => {
    console.warn("TODO: Implement BranchPage");
    return undefined;
};

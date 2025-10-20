"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight, } from "react-syntax-highlighter/dist/esm/styles/prism";
type CodeBlockContextType = {
    code: string;
};
const {{variable-name}} = createContext<CodeBlockContextType>({
    code: "",
});
export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
    code: string;
    language: string;
    showLineNumbers?: boolean;
    children?: ReactNode;
};
export const {{variable-name}} = ({ code, language, showLineNumbers = false, className, children, ...props }: CodeBlockProps) => {
    console.warn("TODO: Implement CodeBlock");
    return undefined;
};
export type CodeBlockCopyButtonProps = ComponentProps<typeof Button> & {
    onCopy?: () => void;
    onError?: (error: Error) => void;
    timeout?: number;
};
export const {{variable-name}} = ({ onCopy, onError, timeout = 2000, children, className, ...props }: CodeBlockCopyButtonProps) => {
    console.warn("TODO: Implement CodeBlockCopyButton");
    return undefined;
};

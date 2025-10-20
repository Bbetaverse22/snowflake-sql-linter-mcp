"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
function TooltipProvider({ delayDuration = 0, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
    console.warn("TODO: Implement TooltipProvider");
    return undefined;
}
function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
    console.warn("TODO: Implement Tooltip");
    return undefined;
}
function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
    console.warn("TODO: Implement TooltipTrigger");
    return undefined;
}
function TooltipContent({ className, sideOffset = 0, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>) {
    console.warn("TODO: Implement TooltipContent");
    return undefined;
}
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

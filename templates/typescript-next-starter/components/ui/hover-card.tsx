"use client";
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
function HoverCard({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
    console.warn("TODO: Implement HoverCard");
    return undefined;
}
function HoverCardTrigger({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
    console.warn("TODO: Implement HoverCardTrigger");
    return undefined;
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
    console.warn("TODO: Implement HoverCardContent");
    return undefined;
}
export { HoverCard, HoverCardTrigger, HoverCardContent };

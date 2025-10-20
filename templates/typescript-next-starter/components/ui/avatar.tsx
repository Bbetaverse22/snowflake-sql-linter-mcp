"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
    console.warn("TODO: Implement Avatar");
    return undefined;
}
function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
    console.warn("TODO: Implement AvatarImage");
    return undefined;
}
function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
    console.warn("TODO: Implement AvatarFallback");
    return undefined;
}
export { Avatar, AvatarImage, AvatarFallback };

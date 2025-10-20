"use client";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
    console.warn("TODO: Implement Select");
    return undefined;
}
function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
    console.warn("TODO: Implement SelectGroup");
    return undefined;
}
function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
    console.warn("TODO: Implement SelectValue");
    return undefined;
}
function SelectTrigger({ className, size = "default", children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}) {
    console.warn("TODO: Implement SelectTrigger");
    return undefined;
}
function SelectContent({ className, children, position = "popper", ...props }: React.ComponentProps<typeof SelectPrimitive.Content>) {
    console.warn("TODO: Implement SelectContent");
    return undefined;
}
function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
    console.warn("TODO: Implement SelectLabel");
    return undefined;
}
function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
    console.warn("TODO: Implement SelectItem");
    return undefined;
}
function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    console.warn("TODO: Implement SelectSeparator");
    return undefined;
}
function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    console.warn("TODO: Implement SelectScrollUpButton");
    return undefined;
}
function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    console.warn("TODO: Implement SelectScrollDownButton");
    return undefined;
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };

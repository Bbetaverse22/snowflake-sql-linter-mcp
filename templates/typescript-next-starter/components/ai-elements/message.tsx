import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { UIMessage } from "ai";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, HTMLAttributes } from "react";
export type MessageProps = HTMLAttributes<HTMLDivElement> & {
    from: UIMessage["role"];
};
export const {{variable-name}} = ({ className, from, ...props }: MessageProps) => {
    console.warn("TODO: Implement Message");
    return undefined;
};
const {{variable-name}} = cva("is-user:dark flex flex-col gap-2 overflow-hidden rounded-lg text-sm", {
    variants: {
        variant: {
            contained: [
                "max-w-[80%] px-4 py-3",
                "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
                "group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
            ],
            flat: [
                "group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
                "group-[.is-assistant]:text-foreground",
            ],
        },
    },
    defaultVariants: {
        variant: "contained",
    },
});
export type MessageContentProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof messageContentVariants>;
export const {{variable-name}} = ({ children, className, variant, ...props }: MessageContentProps) => {
    console.warn("TODO: Implement MessageContent");
    return undefined;
};
export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
    src: string;
    name?: string;
};
export const {{variable-name}} = ({ src, name, className, ...props }: MessageAvatarProps) => {
    console.warn("TODO: Implement MessageAvatar");
    return undefined;
};

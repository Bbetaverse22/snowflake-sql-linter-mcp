"use client";
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType, } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;
const {{variable-name}} = React.createContext<CarouselContextProps | null>(null);
function useCarousel() {
    console.warn("TODO: Implement useCarousel");
    return undefined;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }: React.ComponentProps<"div"> & CarouselProps) {
    console.warn("TODO: Implement Carousel");
    return undefined;
}
function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
    console.warn("TODO: Implement CarouselContent");
    return undefined;
}
function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
    console.warn("TODO: Implement CarouselItem");
    return undefined;
}
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }: React.ComponentProps<typeof Button>) {
    console.warn("TODO: Implement CarouselPrevious");
    return undefined;
}
function CarouselNext({ className, variant = "outline", size = "icon", ...props }: React.ComponentProps<typeof Button>) {
    console.warn("TODO: Implement CarouselNext");
    return undefined;
}
export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };

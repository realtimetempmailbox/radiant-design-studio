import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import baCarpet from "@/assets/ba-living.jpg";
import baTile from "@/assets/ba-tile.jpg";
import baSofa from "@/assets/ba-sofa.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceRug from "@/assets/service-rug.jpg";
import serviceWindow from "@/assets/service-window.jpg";

const items = [
  { img: baCarpet, label: "Carpet Deep Clean" },
  { img: baTile, label: "Tile Restoration" },
  { img: serviceCarpet, label: "Living Room Carpet" },
  { img: baSofa, label: "Upholstery Revival" },
  { img: serviceWindow, label: "Window Cleaning" },
  { img: serviceRug, label: "Rug Cleaning" },
];

export function Transformations() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));

  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Real Results
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            See the <span className="text-gradient">transformation</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real Perth properties. Every image is from one of
            our actual cleaning jobs.
          </p>
        </div>

        <div className="relative mt-14 px-0 md:px-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {items.map((it) => (
                <CarouselItem
                  key={it.label}
                  className="pl-5 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover-lift">
                    <img
                      src={it.img}
                      alt={it.label}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-primary-foreground">
                        {it.label}
                      </h3>
                      <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        Before / After
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 h-11 w-11 border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground md:-left-2" />
            <CarouselNext className="right-0 h-11 w-11 border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground md:-right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

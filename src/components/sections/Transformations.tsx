import { useRef } from "react";
import { Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SectionHeadingBadge } from "@/components/site/SectionHeadingBadge";
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
          <SectionHeadingBadge icon={Sparkles}>Real results</SectionHeadingBadge>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            See the <span className="text-gradient">transformation</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real Perth properties. Every image is from one of
            our actual cleaning jobs.
          </p>
        </div>
      </div>

      {/* Full-width carousel — uses horizontal space like Cleanetic-style showcases */}
      <div className="relative mt-14 w-full px-3 sm:px-5 md:px-6 lg:px-10 xl:px-14 2xl:px-16">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {items.map((it) => (
              <CarouselItem
                key={it.label}
                className="min-w-0 pl-6 basis-[92%] sm:basis-[84%] md:basis-[62%] lg:basis-1/2"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md hover-lift">
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[2/1] lg:min-h-[340px] xl:min-h-[400px] 2xl:min-h-[440px]">
                    <img
                      src={it.img}
                      alt={it.label}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent opacity-90" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                    <h3 className="font-display text-lg font-semibold text-primary-foreground sm:text-xl">
                      {it.label}
                    </h3>
                    <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-accent-foreground sm:px-3 sm:text-xs">
                      Before / After
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 h-11 w-11 border-border bg-card/95 text-foreground shadow-sm backdrop-blur-sm hover:bg-primary hover:text-primary-foreground sm:left-2 md:left-3 lg:left-5" />
          <CarouselNext className="right-1 h-11 w-11 border-border bg-card/95 text-foreground shadow-sm backdrop-blur-sm hover:bg-primary hover:text-primary-foreground sm:right-2 md:right-3 lg:right-5" />
        </Carousel>
      </div>
    </section>
  );
}


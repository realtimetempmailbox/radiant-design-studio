import { Star, Quote, MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SectionHeadingBadge } from "@/components/site/SectionHeadingBadge";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Subiaco, WA",
    service: "Bond Cleaning",
    body: "Absolutely fantastic carpet cleaning! Got my full bond back thanks to Sparkletic. The team was professional, punctual and incredibly thorough.",
  },
  {
    name: "Daniel Chen",
    location: "Fremantle, WA",
    service: "Carpet + Upholstery",
    body: "Steam-cleaned our entire house and a sofa that I thought was beyond saving. Result was unreal — carpets dried in hours, not days.",
  },
  {
    name: "Priya Shah",
    location: "Joondalup, WA",
    service: "Tile & Grout",
    body: "Our kitchen grout looked brand new. Friendly team, fair pricing, no chemical smell. We'll book Sparkletic every year from now on.",
  },
  {
    name: "James O'Connor",
    location: "Scarborough, WA",
    service: "Carpet Cleaning",
    body: "Booked Sparkletic after seeing the reviews — lived up to every one. Old wine stains gone, no trace. Highly recommend to anyone in Perth.",
  },
  {
    name: "Amelia Rossi",
    location: "Cottesloe, WA",
    service: "Rug Cleaning",
    body: "They picked up our Persian rug, cleaned it beautifully and returned it in two days. Genuinely caring team who know their craft.",
  },
  {
    name: "Tom Baker",
    location: "Mandurah, WA",
    service: "Vacate Cleaning",
    body: "Stress-free end-of-lease clean. Agent signed off first inspection. Worth every dollar — will use again for our next move.",
  },
];

const platforms = [
  { rating: "5.0", label: "Google Reviews", count: "100+ reviews" },
  { rating: "5.0", label: "Facebook", count: "50+ reviews" },
  { rating: "★★★★★", label: "Word of Mouth", count: "500+ clients" },
];

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeadingBadge icon={Quote} variant="dark">Testimonials</SectionHeadingBadge>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            What our customers say
          </h2>
          <p className="mt-4 text-primary-foreground/88 leading-relaxed">
            Don't just take our word for it. Here's what Perth locals say about
            our carpet cleaning services.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-accent">{p.rating}</p>
              <p className="mt-1 text-sm font-semibold">{p.label}</p>
              <p className="text-xs text-primary-foreground/60">{p.count}</p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl px-0 md:px-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((r) => (
                <CarouselItem
                  key={r.name}
                  className="pl-4 basis-full"
                >
                  <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
                    <Quote className="h-7 w-7 text-accent" />
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-1 text-accent">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4.5 w-4.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/75">
                        5.0 rated service
                      </span>
                    </div>
                    <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-primary-foreground/92 md:text-xl">
                      "{r.body}"
                    </blockquote>
                    <figcaption className="mt-4 border-t border-white/10 pt-4">
                      <p className="text-lg font-bold tracking-tight text-white">{r.name}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wide text-primary-foreground/70">
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                          {r.location}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-primary-foreground/45" />
                        <span className="rounded-full bg-accent px-2.5 py-1 font-semibold uppercase tracking-wide text-accent-foreground">
                          {r.service}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-11 w-11 border-white/20 bg-white/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="h-11 w-11 border-white/20 bg-white/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}


import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Subiaco, Perth",
    service: "Bond Cleaning",
    body: "Absolutely fantastic carpet cleaning! Got my full bond back thanks to Sparkletic. The team was professional, punctual and incredibly thorough.",
  },
  {
    name: "Daniel Chen",
    location: "Fremantle",
    service: "Carpet + Upholstery",
    body: "Steam-cleaned our entire house and a sofa that I thought was beyond saving. Result was unreal — carpets dried in hours, not days.",
  },
  {
    name: "Priya Shah",
    location: "Joondalup",
    service: "Tile & Grout",
    body: "Our kitchen grout looked brand new. Friendly team, fair pricing, no chemical smell. We'll book Sparkletic every year from now on.",
  },
  {
    name: "James O'Connor",
    location: "Scarborough",
    service: "Carpet Cleaning",
    body: "Booked Sparkletic after seeing the reviews — lived up to every one. Old wine stains gone, no trace. Highly recommend to anyone in Perth.",
  },
  {
    name: "Amelia Rossi",
    location: "Cottesloe",
    service: "Rug Cleaning",
    body: "They picked up our Persian rug, cleaned it beautifully and returned it in two days. Genuinely caring team who know their craft.",
  },
  {
    name: "Tom Baker",
    location: "Mandurah",
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
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            What our customers say
          </h2>
          <p className="mt-4 text-primary-foreground/75">
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

        <div className="relative mt-12 px-0 md:px-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((r) => (
                <CarouselItem
                  key={r.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
                    <Quote className="h-7 w-7 text-accent" />
                    <blockquote className="mt-5 flex-1 text-base leading-relaxed text-primary-foreground/90">
                      "{r.body}"
                    </blockquote>
                    <div className="mt-6 flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <figcaption className="mt-4 border-t border-white/10 pt-4">
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-xs text-primary-foreground/60">
                        {r.location} · {r.service}
                      </p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 h-11 w-11 border-white/20 bg-white/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground md:-left-2" />
            <CarouselNext className="right-0 h-11 w-11 border-white/20 bg-white/10 text-primary-foreground hover:bg-accent hover:text-accent-foreground md:-right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

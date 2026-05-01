import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeadingBadge } from "@/components/site/SectionHeadingBadge";

const services = [
  {
    title: "Carpet Cleaning",
    desc: "Deep steam cleaning that removes stains, allergens and odours from all carpet types.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    tags: ["Steam Clean", "Stain Removal", "Deodorise"],
    popular: true,
  },
  {
    title: "Vacate Cleaning",
    desc: "Bond-back guaranteed end-of-lease cleans covering every corner of your property.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop",
    tags: ["Bond Back", "Full Property", "Guaranteed"],
    popular: false,
  },
  {
    title: "Tile & Grout Cleaning",
    desc: "High-pressure cleaning that restores tiles and grout lines to like-new condition.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
    tags: ["High Pressure", "Grout Restore", "Sealing"],
    popular: false,
  },
  {
    title: "Upholstery Cleaning",
    desc: "Safe, effective cleaning for sofas, chairs and fabric furniture of all kinds.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
    tags: ["Sofa", "Fabric Safe", "Deodorise"],
    popular: false,
  },
  {
    title: "Rug Cleaning",
    desc: "Specialist rug cleaning for all materials including wool, silk and synthetic.",
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&auto=format&fit=crop",
    tags: ["All Materials", "Colour Safe", "Hand Wash"],
    popular: false,
  },
  {
    title: "Window Cleaning",
    desc: "Streak-free window cleaning for residential and commercial properties in Perth.",
    img: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&auto=format&fit=crop",
    tags: ["Streak Free", "Inside & Out", "High Rise"],
    popular: false,
  },
];

export function Services() {
  return (
    <section className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeadingBadge icon={Sparkles}>Our services</SectionHeadingBadge>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Professional cleaning for{" "}
            <span className="text-gradient">every need</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From carpet cleaning to window washing, we deliver sparkling results
            with 100% satisfaction guaranteed across Perth and WA.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover-lift"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {s.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                    Most popular
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted px-2.5 py-1 text-[0.6875rem] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground"
                >
                  View service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="hero" size="lg" className="blink-accent">
            <Link to="/contact">Get a free quote for any service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

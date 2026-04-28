import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import carpet from "@/assets/service-carpet.jpg";
import vacate from "@/assets/service-vacate.jpg";
import tile from "@/assets/service-tile.jpg";
import rug from "@/assets/service-rug.jpg";
import upholstery from "@/assets/service-upholstery.jpg";
import window from "@/assets/service-window.jpg";

const services = [
  {
    title: "Carpet Cleaning",
    img: carpet,
    desc: "Professional high-pressure steam cleaning for all carpet types. Eco-friendly solutions safe for family and pets.",
    tags: ["Steam Cleaning", "Eco-Friendly", "Bond-Back"],
    popular: true,
  },
  {
    title: "Vacate Cleaning",
    img: vacate,
    desc: "Comprehensive end-of-lease cleaning with 100% bond-back guarantee. Everything agents check.",
    tags: ["Bond Guarantee", "Full Property", "Same-Day"],
    popular: true,
  },
  {
    title: "Tile & Grout",
    img: tile,
    desc: "Restore tiles and grout to their original glory. Deep cleaning that removes years of grime.",
    tags: ["Deep Extraction", "Grout Restoration", "Sealing"],
  },
  {
    title: "Rug Cleaning",
    img: rug,
    desc: "Specialist rug cleaning for delicate and valuable rugs. Wool, silk, Persian — we handle it all.",
    tags: ["All Rug Types", "Gentle", "On-Site"],
  },
  {
    title: "Upholstery Cleaning",
    img: upholstery,
    desc: "Refresh sofas, chairs and fabric furniture. Remove stains, odours and allergens.",
    tags: ["Stain Removal", "Odour Treatment", "Fabric Protection"],
  },
  {
    title: "Window Cleaning",
    img: window,
    desc: "Crystal-clear windows inside and out. Streak-free results for homes and commercial properties.",
    tags: ["Streak-Free", "Inside & Out", "Screen Cleaning"],
  },
];

export function Services() {
  return (
    <section className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our services
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Professional cleaning for <span className="text-gradient">every need</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From carpet cleaning to window washing, we deliver sparkling results
            with 100% satisfaction guaranteed across Perth and WA.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover-lift"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {s.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
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
                      className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
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
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Get a free quote for any service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

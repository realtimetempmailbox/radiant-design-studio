import { Star, Quote } from "lucide-react";

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
];

const platforms = [
  { rating: "5.0", label: "Google Reviews", count: "100+ reviews" },
  { rating: "5.0", label: "Facebook", count: "50+ reviews" },
  { rating: "★★★★★", label: "Word of Mouth", count: "500+ clients" },
];

export function Testimonials() {
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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

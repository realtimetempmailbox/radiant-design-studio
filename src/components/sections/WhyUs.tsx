import { ShieldCheck, Leaf, CalendarClock, Star, BadgeCheck, Droplets } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete coverage for peace of mind on every job." },
  { icon: Leaf, title: "Eco-Friendly", desc: "No harsh chemicals. Safe for families and pets." },
  { icon: CalendarClock, title: "Flexible Booking", desc: "6 days a week, from early morning to evening." },
  { icon: Star, title: "5-Star Rated", desc: "Trusted by hundreds of Perth customers." },
  { icon: BadgeCheck, title: "Bond-Back Guarantee", desc: "Get your full bond back or we re-clean free." },
  { icon: Droplets, title: "High-Pressure Steam", desc: "Deep extraction that removes dirt, allergens and bacteria." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Perth's most <span className="text-gradient">trusted</span> carpet cleaners
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            We're not just cleaners — we're your partners in maintaining a
            spotless, healthy home. Here's what sets Sparkletic apart from
            the rest.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 shadow-sm hover-lift"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/30 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-primary-glow transition-transform group-hover:-rotate-6">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground">{it.desc}</p>
                <span className="mt-4 block text-xs font-mono font-semibold text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Leaf,
  CalendarClock,
  Star,
  BadgeCheck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

const topTiles = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete coverage for peace of mind on every job." },
  { icon: Leaf, title: "Eco-Friendly", desc: "No harsh chemicals. Safe for families and pets." },
  { icon: CalendarClock, title: "Flexible Booking", desc: "6 days a week, from early morning to evening." },
  { icon: Star, title: "5-Star Rated", desc: "Trusted by hundreds of Perth customers." },
  { icon: BadgeCheck, title: "Bond-Back Guarantee", desc: "Get your full bond back or we re-clean free." },
] as const;

const featureCards = [
  {
    icon: Sparkles,
    title: "High-Pressure Steam Cleaning",
    desc: "Our professional-grade steam cleaning equipment delivers deep extraction that removes dirt, allergens, and bacteria without harsh chemicals.",
    to: "/services",
  },
  {
    icon: BadgeCheck,
    title: "CCAWA Member",
    desc: "As proud members of the Carpet Cleaners Association of WA, we adhere to the highest industry standards and best practices.",
    to: "/about",
  },
  {
    icon: Users,
    title: "Commercial & Residential",
    desc: "From family homes to offices, hotels, and shopping centres — we have the expertise and equipment for any size job.",
    to: "/contact",
  },
] as const;

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Why choose us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Perth's most <span className="text-gradient">trusted</span> carpet cleaners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            We're not just cleaners — we're your partners in maintaining a spotless, healthy home.
            Here's what sets Sparkletic apart.
          </p>
        </div>

        {/* Top: small tiles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {topTiles.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-border bg-card px-6 py-7 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-primary-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-bold">{it.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
            </article>
          ))}
        </div>

        {/* Bottom: wide feature cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-primary-glow">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold leading-tight">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <Link
                to={c.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

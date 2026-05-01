import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "./QuoteForm";
import { Award, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "5.0★", label: "Average Rating" },
  { value: "48hr", label: "Re-clean Promise" },
  { value: "100%", label: "Satisfaction" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-gradient-glow" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[140px] animate-blob" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary-foreground/10 blur-[120px] animate-blob" />

      <div className="relative mx-auto max-w-screen-2xl px-5 pb-20 pt-14 text-primary-foreground lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Servicing Perth & Western Australia
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Perth's Trusted <br />
              <span className="text-gradient">Carpet Cleaning</span> <br />
              Experts
            </h1>

            <p className="mt-6 max-w-xl text-base text-primary-foreground/75 md:text-lg">
              Professional eco-friendly steam cleaning for carpets, rugs, tiles
              & upholstery. No harsh chemicals. Bond-back guarantee for tenants.
              CCAWA member.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="xl" className="blink-accent">
                <Link to="/contact">
                  Get your free quote
                  <Sparkles className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <a href="tel:+61862615940">
                  <Phone className="h-4 w-4" /> (08) 6261 5940
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Chip icon={Award}>10+ Years Experience</Chip>
              <Chip icon={ShieldCheck}>WHS Certified</Chip>
              <Chip icon={Star}>Advanced Stain Removal</Chip>
            </div>
          </div>

          {/* Right: form card overlapping image */}
          <div className="relative">
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-elegant">
                <img
                  src={heroTeam}
                  alt="Sparkletic professional cleaning team in branded uniforms"
                  width={1536}
                  height={1024}
                  className="h-[380px] w-full object-cover md:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent">Proud</p>
                    <p className="text-base font-semibold">CCAWA Member</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-accent-foreground">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="ml-1 text-xs font-bold">5.0</span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-auto relative mt-6 lg:absolute lg:-bottom-10 lg:-right-6 lg:mt-0 lg:w-[380px] xl:w-[420px]">
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-accent/95 text-accent-foreground shadow-glow lg:mt-40">
          <div className="grid grid-cols-2 divide-x divide-accent-foreground/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-7 text-center">
                <p className="font-display text-3xl font-bold md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
      <Icon className="h-3.5 w-3.5 text-accent" />
      {children}
    </span>
  );
}

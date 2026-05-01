import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Carpet Cleaning",
  "Vacate Cleaning",
  "Tile & Grout",
  "Rug Cleaning",
  "Upholstery",
  "Window Cleaning",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/30 blur-[120px] animate-blob" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-primary/40 blur-[120px] animate-blob" />
      </div>
      <div className="relative mx-auto max-w-screen-2xl px-5 pt-20 pb-8 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm md:p-10">
          <div className="grid gap-7 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Servicing Perth & Western Australia
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Ready for spotless carpets?
              </h3>
              <p className="mt-3 max-w-2xl text-primary-foreground/82">
                Get your free quote today. No obligation, just honest pricing
                and professional eco-friendly cleaning you can trust.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild variant="hero" className="blink-accent">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/35 bg-white/10 text-white hover:bg-white hover:text-primary">
                  <a href="tel:+61862615940">(08) 6261 5940</a>
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 lg:justify-end">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <Star className="h-3.5 w-3.5 fill-current text-accent" />
                  4.9 average rating
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <Star className="h-3.5 w-3.5 fill-current text-accent" />
                  500+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Sparkles className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl font-bold">Sparkletic</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/74">
              Perth's trusted eco-friendly carpet & upholstery cleaning experts.
              10+ years of spotless results.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-primary-foreground/85">
                <Star className="h-3 w-3 fill-current text-accent" />
                Trusted local team
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-primary-foreground/85">
                <Star className="h-3 w-3 fill-current text-accent" />
                CCAWA member
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-primary-foreground/70 hover:text-accent">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent">Contact</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-accent">Our Services</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-accent">Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+61862615940" className="text-primary-foreground/80 hover:text-accent">(08) 6261 5940</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hello@sparkletic.au" className="text-primary-foreground/80 hover:text-accent">hello@sparkletic.au</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">Perth, Western Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sparkletic Cleaning. All rights reserved.</p>
          <p>Proudly servicing Perth & Western Australia</p>
        </div>
      </div>
    </footer>
  );
}

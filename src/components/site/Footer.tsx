import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

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
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Sparkles className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl font-bold">Sparkletic</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              Perth's trusted eco-friendly carpet & upholstery cleaning experts.
              10+ years of spotless results.
            </p>
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sparkletic Cleaning. All rights reserved.</p>
          <p>Proudly servicing Perth & Western Australia</p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 text-accent-foreground shadow-glow md:px-16 md:py-20">
          <span className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
          <span className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/20 bg-accent-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" />
              Ready when you are
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              Ready for spotless carpets?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-accent-foreground/80 md:text-lg">
              Get your free quote today. No obligation, just honest pricing and
              professional eco-friendly cleaning you can trust.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="dark" size="xl" className="blink-accent">
                <Link to="/contact">Get free quote</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:+61862615940">
                  <Phone className="h-4 w-4" />
                  (08) 6261 5940
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

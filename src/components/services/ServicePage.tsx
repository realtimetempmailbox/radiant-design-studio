import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import type { ServiceSlug } from "@/content/services";
import { SERVICES_CONTENT, SERVICES_ORDER } from "@/content/services";

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = SERVICES_CONTENT[slug];
  const related = SERVICES_ORDER.filter((s) => s !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" />
          <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {service.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/75">
              {service.heroDescription}
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 blink-accent">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold">What’s included</h2>
              <p className="mt-3 text-muted-foreground">{service.intro}</p>
              <ul className="mt-6 grid gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-3xl font-bold">Expected outcomes</h2>
              <ul className="mt-6 grid gap-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-muted p-5">
                <p className="text-sm text-muted-foreground">
                  Planning for headless CMS: this section is intentionally data-driven so
                  service content can be mapped from WordPress fields later without
                  changing layout components.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 grid gap-4">
            {service.faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/40 py-16">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <h2 className="font-display text-2xl font-bold">Related services</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((relatedSlug) => {
                const relatedService = SERVICES_CONTENT[relatedSlug];
                return (
                  <Link
                    key={relatedSlug}
                    to={`/services/${relatedSlug}`}
                    className="rounded-2xl border border-border bg-card p-5 text-sm font-medium hover:bg-muted"
                  >
                    {relatedService.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

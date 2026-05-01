import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SERVICES_CONTENT, SERVICES_ORDER } from "@/content/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Cleaning Services Perth | Sparkletic" },
      {
        name: "description",
        content:
          "Explore Sparkletic's carpet, vacate, tile and grout, rug, upholstery, and window cleaning services in Perth.",
      },
    ],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Our services
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">
              Cleaning services across Perth
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75">
              Compare each service and choose the one that matches your property,
              timeline, and cleaning goals.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES_ORDER.map((slug) => {
              const service = SERVICES_CONTENT[slug];
              return (
                <article
                  key={slug}
                  className="rounded-3xl border border-border bg-card p-7 shadow-sm hover-lift"
                >
                  <h2 className="font-display text-2xl font-bold">{service.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.heroDescription}
                  </p>
                  <Link
                    to={`/services/${slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
                  >
                    View service <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

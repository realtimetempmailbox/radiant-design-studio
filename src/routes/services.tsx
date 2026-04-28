import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/sections/Services";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Cleaning Services — Sparkletic Perth" },
      {
        name: "description",
        content:
          "Explore Sparkletic's full range of professional cleaning services in Perth: carpet, vacate, tile & grout, rug, upholstery, and window cleaning.",
      },
      { property: "og:title", content: "Our Cleaning Services — Sparkletic Perth" },
      {
        property: "og:description",
        content:
          "Full range of eco-friendly cleaning services across Perth — carpets, tiles, upholstery, windows and more.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-50 bg-gradient-glow" />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Our Services
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">
              Professional Cleaning <span className="text-gradient">for Every Need</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75">
              From stubborn carpet stains to sparkling windows, we deliver 100%
              satisfaction across Perth and Western Australia.
            </p>
          </div>
        </section>
        <Services />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

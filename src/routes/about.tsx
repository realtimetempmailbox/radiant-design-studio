import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhyUs } from "@/components/sections/WhyUs";
import { Equipment } from "@/components/sections/Equipment";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sparkletic — 10+ Years Cleaning Perth Homes" },
      {
        name: "description",
        content:
          "Meet the Sparkletic team. 10+ years of eco-friendly carpet and upholstery cleaning in Perth. Proud CCAWA members committed to 5-star service.",
      },
      { property: "og:title", content: "About Sparkletic — Perth's Carpet Cleaning Specialists" },
      {
        property: "og:description",
        content:
          "Family-owned, eco-first cleaning team trusted by 500+ Perth households and businesses.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  "10+ years serving Perth and WA",
  "Fully insured and WHS certified",
  "Truck-mounted Sapphire Scientific 570",
  "Eco-friendly, family & pet safe",
  "Bond-back guarantee for tenants",
  "Proud CCAWA member",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              About us
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">
              We're not just cleaners <br />
              <span className="text-gradient">we're your partners</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75">
              Born and raised in Perth, Sparkletic has spent over a decade
              perfecting the art of healthy, eco-friendly deep cleaning.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Our story
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold">
                A cleaner home begins with a cleaner process.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                We started Sparkletic with a simple belief — your home shouldn't
                smell like chemicals after a clean. Using true high-temperature
                steam extraction and plant-based solutions, we deliver deeper
                results that are safer for your family, pets and the planet.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Today we service 500+ happy households across Perth with a 5-star
                average rating and a 48-hour re-clean promise on every single job.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
            <ul className="grid gap-3 rounded-3xl border border-border bg-gradient-card p-8 shadow-soft">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WhyUs />
        <Equipment />
      </main>
      <Footer />
    </div>
  );
}

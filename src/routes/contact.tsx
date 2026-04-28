import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sparkletic — Free Carpet Cleaning Quote in Perth" },
      {
        name: "description",
        content:
          "Request a free, no-obligation quote for carpet, tile, rug or upholstery cleaning in Perth. Call (08) 6261 5940 or fill out our quick form.",
      },
      { property: "og:title", content: "Contact Sparkletic — Free Quote" },
      {
        property: "og:description",
        content:
          "Get a free same-day quote for your Perth cleaning job. Bond-back guarantee. 48hr re-clean promise.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Call us", value: "(08) 6261 5940", href: "tel:+61862615940" },
  { icon: Mail, label: "Email", value: "hello@sparkletic.au", href: "mailto:hello@sparkletic.au" },
  { icon: MapPin, label: "Service area", value: "Perth & Western Australia" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 7am – 6pm" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Let's talk
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">
              Get your <span className="text-gradient">free quote</span> today
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/75">
              No obligation, no pressure. Just honest pricing and spotless
              results — usually within the hour.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-bold">
                How to reach us
              </h2>
              <p className="mt-3 text-muted-foreground">
                Prefer a real conversation? Give us a call and we'll usually
                have a tailored quote ready for you within minutes.
              </p>
              <ul className="mt-8 grid gap-5">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-sm hover-lift"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="mt-1 block text-lg font-semibold hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

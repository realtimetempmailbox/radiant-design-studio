import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Transformations } from "@/components/sections/Transformations";
import { WhyUs } from "@/components/sections/WhyUs";
import { Equipment } from "@/components/sections/Equipment";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparkletic — Perth's Trusted Carpet Cleaning Experts" },
      {
        name: "description",
        content:
          "Professional eco-friendly steam carpet, tile, rug & upholstery cleaning in Perth. Bond-back guarantee. CCAWA member. Book your free quote today.",
      },
      { property: "og:title", content: "Sparkletic — Perth's Trusted Carpet Cleaning Experts" },
      {
        property: "og:description",
        content:
          "Eco-friendly steam cleaning for carpets, rugs, tiles & upholstery across Perth. No harsh chemicals. 48hr re-clean promise.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Transformations />
        <WhyUs />
        <Equipment />
        <Services />
        <Testimonials />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

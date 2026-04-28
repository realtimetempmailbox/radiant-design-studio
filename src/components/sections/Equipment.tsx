import { Check } from "lucide-react";
import van from "@/assets/service-van.jpg";

const features = [
  { title: "True Steam Cleaning", desc: "Heats water to 200°F+ for genuine steam extraction." },
  { title: "Superior Suction Power", desc: "Truck-mounted vacuum removes more dirt and moisture." },
  { title: "Faster Drying", desc: "Powerful extraction means carpets dry in hours, not days." },
  { title: "Deep Sanitisation", desc: "High temperatures kill bacteria, dust mites and allergens." },
];

const perks = [
  "Professional-grade results every time",
  "No harsh chemicals needed",
  "Safe for children and pets",
  "Removes stubborn stains",
  "Extends carpet lifespan",
  "Eco-friendly cleaning",
];

export function Equipment() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Professional equipment
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Powered by <span className="text-gradient">Sapphire Scientific 570</span> truck mount
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We invest in the best equipment so you get the best results. Our
              truck-mounted Sapphire Scientific 570 delivers true
              high-temperature steam cleaning — not just hot water extraction
              like many competitors.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-gradient-card p-5 shadow-sm hover-lift"
                >
                  <h3 className="font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-accent opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elegant">
              <img
                src={van}
                alt="Sparkletic service van with truck-mounted carpet cleaning equipment"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-7 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold">Sapphire Scientific 570</h3>
                <p className="mt-1 text-sm text-primary-foreground/75">
                  Industry-leading truck-mounted steam cleaning system
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-border bg-gradient-card p-6 shadow-sm">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

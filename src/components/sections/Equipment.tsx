import { Check, Droplets, Wind, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeadingBadge } from "@/components/site/SectionHeadingBadge";
import van from "@/assets/service-van.jpg";

const features = [
  {
    icon: Droplets,
    title: "True Steam Cleaning",
    desc: "Heats water to 200°F+ for genuine steam extraction",
  },
  {
    icon: ShieldCheck,
    title: "Superior Suction Power",
    desc: "Truck-mounted vacuum removes more dirt and moisture",
  },
  {
    icon: Wind,
    title: "Faster Drying",
    desc: "Powerful extraction means carpets dry in hours, not days",
  },
  {
    icon: Sparkles,
    title: "Deep Sanitisation",
    desc: "High temperatures kill bacteria, dust mites and allergens",
  },
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
    <section className="relative overflow-hidden bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeadingBadge icon={Sparkles}>Professional equipment</SectionHeadingBadge>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Powered by <span className="text-gradient">Sapphire Scientific 570</span>
              <br className="hidden sm:block" /> Truck Mount
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We invest in the best equipment so you get the best results. Our
              truck-mounted Sapphire Scientific 570 delivers true
              high-temperature steam cleaning — not just hot water extraction
              like many competitors.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{f.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {f.desc}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600/15 text-emerald-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
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
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 right-4">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-md backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                  <Droplets className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Sapphire Scientific 570</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Industry-leading truck-mounted steam cleaning system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { ClipboardList, CalendarCheck, Sparkles, ThumbsUp, ShieldCheck, Leaf, Clock } from "lucide-react";
import { SectionHeadingBadge } from "@/components/site/SectionHeadingBadge";

const steps = [
  { n: "01", icon: ClipboardList, title: "Get your free quote", desc: "Call us or fill out our quick online form. We'll be in touch shortly with a detailed, no-obligation quote." },
  { n: "02", icon: CalendarCheck, title: "Book your clean", desc: "Choose a date and time that works. We're available Monday to Saturday, 7am to 6pm." },
  { n: "03", icon: Sparkles, title: "We clean, you relax", desc: "Our team arrives on time with eco-friendly supplies and transforms your carpets with true steam cleaning." },
  { n: "04", icon: ThumbsUp, title: "100% satisfaction", desc: "We follow up to ensure you're delighted. Not happy? We re-clean any areas completely free." },
];

const promises = [
  { icon: Clock, title: "On-Time Arrival", desc: "We respect your time. Our team arrives within the scheduled window, every time." },
  { icon: ShieldCheck, title: "Bond-Back Guarantee", desc: "For tenants, we guarantee your carpets will pass inspection or we re-clean for free." },
  { icon: Leaf, title: "Eco-Friendly Process", desc: "High-pressure steam cleaning, no harsh chemicals. Safe for families and pets." },
];

export function Process() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeadingBadge icon={ClipboardList}>How it works</SectionHeadingBadge>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Book your clean in <span className="text-gradient">4 easy steps</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Getting spotless carpets has never been easier. Here's how simple
            it is to work with Sparkletic.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-gradient-card p-7 shadow-sm hover-lift"
            >
              <SectionHeadingBadge
                icon={s.icon}
                className="px-3 py-1.5 text-xs tracking-wide"
              >
                Step {s.n}
              </SectionHeadingBadge>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block" />
              )}
            </li>
          ))}
        </ol>

        {/* Promises */}
        <div className="mt-24 overflow-hidden rounded-[2rem] border border-border bg-gradient-hero p-8 text-primary-foreground shadow-elegant md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
            <div>
              <SectionHeadingBadge icon={ShieldCheck} variant="dark">Our promise to you</SectionHeadingBadge>
              <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">
                Guarantees that give you complete peace of mind.
              </h3>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {promises.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold">{p.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/82">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


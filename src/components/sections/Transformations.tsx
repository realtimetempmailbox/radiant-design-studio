import baCarpet from "@/assets/ba-living.jpg";
import baTile from "@/assets/ba-tile.jpg";
import baSofa from "@/assets/ba-sofa.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceRug from "@/assets/service-rug.jpg";
import serviceWindow from "@/assets/service-window.jpg";

const items = [
  { img: baCarpet, label: "Carpet Deep Clean" },
  { img: baTile, label: "Tile Restoration" },
  { img: serviceCarpet, label: "Living Room Carpet" },
  { img: baSofa, label: "Upholstery Revival" },
  { img: serviceWindow, label: "Window Cleaning" },
  { img: serviceRug, label: "Rug Cleaning" },
];

export function Transformations() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Real Results
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            See the <span className="text-gradient">transformation</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real Perth properties. Every image is from one of
            our actual cleaning jobs.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.label}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {it.label}
                </h3>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                  Before / After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";


const serviceLinks = [
  { to: "/services/carpet-cleaning", label: "Carpet Cleaning" },
  { to: "/services/vacate-cleaning", label: "Vacate Cleaning" },
  { to: "/services/tile-grout-cleaning", label: "Tile & Grout Cleaning" },
  { to: "/services/rug-cleaning", label: "Rug Cleaning" },
  { to: "/services/upholstery-cleaning", label: "Upholstery Cleaning" },
  { to: "/services/window-cleaning", label: "Window Cleaning" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", dropdown: serviceLinks },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-screen-2xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-primary-glow transition-transform group-hover:rotate-6">
            <Sparkles className="h-5 w-5" strokeWidth={2.4} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Sparkletic
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) =>
            n.dropdown ? (
              <div key={n.to} className="relative group">
                <Link
                  to={n.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "!text-foreground !bg-muted" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
                <div className="absolute left-0 top-full z-10 hidden min-w-[220px] rounded-lg border border-border bg-background py-2 shadow-lg group-hover:block">
                  {n.dropdown.map((d) => (
                    <Link
                      key={d.to}
                      to={d.to}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "!text-foreground !bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+61862615940"
            className="group flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-accent">
              <Phone className="h-4 w-4" />
            </span>
            <span className="hidden lg:inline">(08) 6261 5940</span>
          </a>
          <Button asChild variant="hero" className="blink-accent">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2 blink-accent">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

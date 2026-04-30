import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceDropdown = [
  "Carpet Cleaning",
  "Vacate Cleaning",
  "Tile & Grout Cleaning",
  "Rug Cleaning",
  "Upholstery Cleaning",
  "Window Cleaning",
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
          {nav.map((n) => {
            if (n.label !== "Services") {
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "!text-foreground !bg-muted" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              );
            }

            return (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  onBlur={(e) => {
                    if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: servicesOpen ? "rotate(180deg)" : undefined }} />
                </button>

                {servicesOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-3 w-[320px] overflow-hidden rounded-2xl border border-border bg-background shadow-elegant"
                  >
                    <div className="p-2">
                      {serviceDropdown.map((label) => (
                        <Link
                          key={label}
                          to="/services"
                          role="menuitem"
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span>{label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          <Button
            asChild
            variant="hero"
            className="bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_16px_40px_rgba(16,185,129,0.35)] hover:shadow-[0_22px_60px_rgba(16,185,129,0.45)] hover:brightness-105"
          >
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
            {nav.map((n) => {
              if (n.label !== "Services") {
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                );
              }

              return (
                <div key={n.to} className="rounded-lg">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className="h-5 w-5 transition-transform"
                      style={{ transform: mobileServicesOpen ? "rotate(180deg)" : undefined }}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 grid gap-1 px-2 pb-2">
                      {serviceDropdown.map((label) => (
                        <Link
                          key={label}
                          to="/services"
                          onClick={() => {
                            setMobileServicesOpen(false);
                            setOpen(false);
                          }}
                          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button
              asChild
              variant="hero"
              className="mt-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_16px_40px_rgba(16,185,129,0.35)] hover:shadow-[0_22px_60px_rgba(16,185,129,0.45)] hover:brightness-105"
            >
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

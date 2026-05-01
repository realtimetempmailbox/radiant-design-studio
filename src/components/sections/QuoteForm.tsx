import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Carpet Cleaning",
  "Vacate / Bond Cleaning",
  "Tile & Grout Cleaning",
  "Rug Cleaning",
  "Upholstery Cleaning",
  "Window Cleaning",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request sent!", {
        description: "We'll be in touch within the hour.",
      });
    }, 900);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-accent/25 blur-2xl" />
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-elegant md:p-8"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Free quote
            </p>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Get your{" "}
            <span className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-accent-foreground shadow-sm">
              FREE
            </span>{" "}
            quote
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            No obligation · We'll be in touch shortly.
          </p>

          <div className={compact ? "mt-5 space-y-3.5" : "mt-6 space-y-4"}>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold text-foreground/80">Full name</Label>
                <Input id="name" name="name" placeholder="e.g. Sarah Mitchell" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs font-semibold text-foreground/80">Phone</Label>
                <Input id="phone" name="phone" placeholder="04xx xxx xxx" required className="h-12 rounded-xl" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-foreground/80">Email address</Label>
              <Input id="email" name="email" type="email" placeholder="you@email.com" required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="service" className="text-xs font-semibold text-foreground/80">Service needed</Label>
              <Select name="service">
                <SelectTrigger id="service" className="h-12 rounded-xl">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {!compact && (
              <div className="space-y-1.5">
                <Label htmlFor="msg" className="text-xs font-semibold text-foreground/80">Project details</Label>
                <Textarea id="msg" name="msg" placeholder="Tell us about your property, rooms, and any specific concerns..." className="min-h-[110px] rounded-xl" />
              </div>
            )}
            <Button type="submit" variant="hero" size="lg" className="w-full blink-accent quote-cta-form" disabled={loading}>
              {loading ? "Sending..." : "Get my free quote"} <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" /> Your info is secure and never shared
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

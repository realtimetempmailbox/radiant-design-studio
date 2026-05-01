import { cn } from "@/lib/utils";

/**
 * Section kicker badges — high contrast for scanability (service / conversion pages).
 * default: teal on soft tint (light sections)
 * dark: light chip on hero gradients
 * accent: solid light chip on lime CTA blocks
 */
const variants = {
  default: cn(
    "inline-flex items-center justify-center rounded-full border border-primary/30",
    "bg-primary-soft px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary",
    "shadow-sm dark:border-white/20 dark:bg-white/12 dark:text-white dark:shadow-md dark:backdrop-blur-sm",
  ),
  dark: cn(
    "inline-flex items-center justify-center rounded-full border border-white/40",
    "bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white",
    "shadow-md backdrop-blur-md",
  ),
  accent: cn(
    "inline-flex items-center justify-center rounded-full border border-primary/25",
    "bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary",
    "shadow-md",
  ),
};

const iconWrapByVariant = {
  default: "bg-primary/10 text-primary",
  dark: "bg-white/20 text-white",
  accent: "bg-primary/12 text-primary",
} as const;

export function SectionHeadingBadge({
  children,
  icon: Icon,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  variant?: keyof typeof variants;
}) {
  return (
    <span className={cn(variants[variant], className)}>
      {Icon ? (
        <span
          className={cn(
            "mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full",
            iconWrapByVariant[variant],
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
      ) : null}
      {children}
    </span>
  );
}

import { U as jsxRuntimeExports } from "./worker-entry-D6eMqv1S.js";
import { d as cn } from "./Footer-BBEpdHQe.js";
const variants = {
  default: cn(
    "inline-flex items-center justify-center rounded-full border border-primary/30",
    "bg-primary-soft px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary",
    "shadow-sm dark:border-white/20 dark:bg-white/12 dark:text-white dark:shadow-md dark:backdrop-blur-sm"
  ),
  dark: cn(
    "inline-flex items-center justify-center rounded-full border border-white/40",
    "bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white",
    "shadow-md backdrop-blur-md"
  ),
  accent: cn(
    "inline-flex items-center justify-center rounded-full border border-primary/25",
    "bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary",
    "shadow-md"
  )
};
const iconWrapByVariant = {
  default: "bg-primary/10 text-primary",
  dark: "bg-white/20 text-white",
  accent: "bg-primary/12 text-primary"
};
function SectionHeadingBadge({
  children,
  icon: Icon,
  className,
  variant = "default"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(variants[variant], className), children: [
    Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full",
          iconWrapByVariant[variant]
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
      }
    ) : null,
    children
  ] });
}
export {
  SectionHeadingBadge as S
};

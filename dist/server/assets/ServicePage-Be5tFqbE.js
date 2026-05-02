import { U as jsxRuntimeExports } from "./worker-entry-D6eMqv1S.js";
import { a as SERVICES_CONTENT, L as Link, S as SERVICES_ORDER } from "./router-ES5XP76h.js";
import { H as Header, S as Sparkles, B as Button, F as Footer } from "./Footer-BBEpdHQe.js";
import { S as SectionHeadingBadge } from "./SectionHeadingBadge-BlSR1y6Y.js";
import { A as ArrowRight } from "./arrow-right-BkMhoJUf.js";
import { C as CircleCheck } from "./circle-check-Cn61-9GZ.js";
function ServicePage({ slug }) {
  const service = SERVICES_CONTENT[slug];
  const related = SERVICES_ORDER.filter((s) => s !== slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-5 text-center lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeadingBadge, { icon: Sparkles, variant: "dark", children: service.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-5xl font-bold md:text-6xl", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/88", children: service.heroDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "mt-8 blink-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Get Free Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-8 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "What’s included" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: service.intro }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-3", children: service.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-8 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "Expected outcomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-3", children: service.outcomes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl bg-muted p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Planning for headless CMS: this section is intentionally data-driven so service content can be mapped from WordPress fields later without changing layout components." }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 pb-20 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "Frequently asked questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4", children: service.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: faq.a })
        ] }, faq.q)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-muted/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Related services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: related.map((relatedSlug) => {
          const relatedService = SERVICES_CONTENT[relatedSlug];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/services/${relatedSlug}`,
              className: "rounded-2xl border border-border bg-card p-5 text-sm font-medium hover:bg-muted",
              children: relatedService.title
            },
            relatedSlug
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServicePage as S
};

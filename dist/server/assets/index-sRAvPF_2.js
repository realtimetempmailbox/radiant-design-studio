import { U as jsxRuntimeExports } from "./worker-entry-D6eMqv1S.js";
import { S as SERVICES_ORDER, a as SERVICES_CONTENT, L as Link } from "./router-ES5XP76h.js";
import { H as Header, F as Footer } from "./Footer-BBEpdHQe.js";
import { A as ArrowRight } from "./arrow-right-BkMhoJUf.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ServicesIndexPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-5 text-center lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent", children: "Our services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-5xl font-bold md:text-6xl", children: "Cleaning services across Perth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-primary-foreground/75", children: "Compare each service and choose the one that matches your property, timeline, and cleaning goals." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: SERVICES_ORDER.map((slug) => {
        const service = SERVICES_CONTENT[slug];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-7 shadow-sm hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: service.heroDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/services/${slug}`, className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground", children: [
            "View service ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }, slug);
      }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServicesIndexPage as component
};

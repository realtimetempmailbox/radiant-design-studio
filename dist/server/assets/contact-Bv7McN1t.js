import { U as jsxRuntimeExports } from "./worker-entry-D6eMqv1S.js";
import { H as Header, P as Phone, M as Mail, a as MapPin, F as Footer } from "./Footer-BBEpdHQe.js";
import { C as Clock, Q as QuoteForm } from "./QuoteForm-B6ImSeBf.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-ES5XP76h.js";
import "./shield-check-CnMxY49p.js";
import "./arrow-right-BkMhoJUf.js";
const details = [{
  icon: Phone,
  label: "Call us",
  value: "(08) 6261 5940",
  href: "tel:+61862615940"
}, {
  icon: Mail,
  label: "Email",
  value: "hello@sparkletic.au",
  href: "mailto:hello@sparkletic.au"
}, {
  icon: MapPin,
  label: "Service area",
  value: "Perth & Western Australia"
}, {
  icon: Clock,
  label: "Hours",
  value: "Mon–Sat · 7am – 6pm"
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60 bg-gradient-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-5 text-center lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent", children: "Let's talk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-bold md:text-6xl", children: [
            "Get your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "free quote" }),
            " today"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-primary-foreground/75", children: "No obligation, no pressure. Just honest pricing and spotless results — usually within the hour." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-5 py-24 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "How to reach us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Prefer a real conversation? Give us a call and we'll usually have a tailored quote ready for you within minutes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid gap-5", children: details.map(({
            icon: Icon,
            label,
            value,
            href
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-sm hover-lift", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: label }),
              href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "mt-1 block text-lg font-semibold hover:text-primary", children: value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-semibold", children: value })
            ] })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteForm, {})
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};

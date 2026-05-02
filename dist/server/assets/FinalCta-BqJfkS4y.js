import { U as jsxRuntimeExports } from "./worker-entry-D6eMqv1S.js";
import { L as Link } from "./router-ES5XP76h.js";
import { c as createLucideIcon, S as Sparkles, B as Button, P as Phone } from "./Footer-BBEpdHQe.js";
import { S as SectionHeadingBadge } from "./SectionHeadingBadge-BlSR1y6Y.js";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const services = [
  {
    title: "Carpet Cleaning",
    desc: "Deep steam cleaning that removes stains, allergens and odours from all carpet types.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    tags: ["Steam Clean", "Stain Removal", "Deodorise"],
    popular: true
  },
  {
    title: "Vacate Cleaning",
    desc: "Bond-back guaranteed end-of-lease cleans covering every corner of your property.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop",
    tags: ["Bond Back", "Full Property", "Guaranteed"],
    popular: false
  },
  {
    title: "Tile & Grout Cleaning",
    desc: "High-pressure cleaning that restores tiles and grout lines to like-new condition.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
    tags: ["High Pressure", "Grout Restore", "Sealing"],
    popular: false
  },
  {
    title: "Upholstery Cleaning",
    desc: "Safe, effective cleaning for sofas, chairs and fabric furniture of all kinds.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
    tags: ["Sofa", "Fabric Safe", "Deodorise"],
    popular: false
  },
  {
    title: "Rug Cleaning",
    desc: "Specialist rug cleaning for all materials including wool, silk and synthetic.",
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&auto=format&fit=crop",
    tags: ["All Materials", "Colour Safe", "Hand Wash"],
    popular: false
  },
  {
    title: "Window Cleaning",
    desc: "Streak-free window cleaning for residential and commercial properties in Perth.",
    img: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&auto=format&fit=crop",
    tags: ["Streak Free", "Inside & Out", "High Rise"],
    popular: false
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-muted/40 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeadingBadge, { icon: Sparkles, children: "Our services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold md:text-5xl", children: [
        "Professional cleaning for",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "every need" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From carpet cleaning to window washing, we deliver sparkling results with 100% satisfaction guaranteed across Perth and WA." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover-lift",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/4] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: s.img,
                alt: s.title,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            s.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-accent-foreground shadow-glow", children: "Most popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-sm text-muted-foreground", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border bg-muted px-2.5 py-1 text-[0.6875rem] font-medium text-muted-foreground",
                children: t
              },
              t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground",
                children: [
                  "View service",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                ]
              }
            )
          ] })
        ]
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "blink-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get a free quote for any service" }) }) })
  ] }) });
}
function FinalCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-background py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-5 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 text-accent-foreground shadow-glow md:px-16 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeadingBadge, { icon: Sparkles, variant: "accent", children: "Ready when you are" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl", children: "Ready for spotless carpets?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base text-accent-foreground/92 md:text-lg md:leading-relaxed", children: "Get your free quote today. No obligation, just honest pricing and professional eco-friendly cleaning you can trust." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "dark", size: "xl", className: "blink-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get free quote" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+61862615940", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          "(08) 6261 5940"
        ] }) })
      ] })
    ] })
  ] }) }) });
}
export {
  FinalCta as F,
  Services as S
};

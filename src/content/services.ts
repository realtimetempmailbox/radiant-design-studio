export type ServiceSlug =
  | "carpet-cleaning"
  | "vacate-cleaning"
  | "tile-grout-cleaning"
  | "rug-cleaning"
  | "upholstery-cleaning"
  | "window-cleaning";

type ServiceContent = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  outcomes: string[];
  faqs: Array<{ q: string; a: string }>;
};

export const SERVICES_CONTENT: Record<ServiceSlug, ServiceContent> = {
  "carpet-cleaning": {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    eyebrow: "Perth's trusted carpet cleaning specialists",
    heroDescription:
      "Deep steam carpet cleaning that removes embedded dirt, stains, odours, and allergens while staying safe for families and pets.",
    metaTitle: "Carpet Cleaning Perth | Sparkletic",
    metaDescription:
      "Professional carpet steam cleaning in Perth with eco-friendly products, fast drying times, and 5-star service.",
    intro:
      "Our high-temperature extraction process is designed to restore carpet appearance, hygiene, and freshness in one visit.",
    includes: [
      "Pre-inspection and fibre suitability check",
      "Targeted pre-treatment for traffic lanes and stains",
      "High-temperature steam extraction",
      "Deodorising treatment on request",
      "Post-clean grooming and final walkthrough",
    ],
    outcomes: [
      "Fresher carpets with reduced odours",
      "Improved indoor hygiene and allergen control",
      "Faster drying compared to basic methods",
    ],
    faqs: [
      {
        q: "How long does carpet drying usually take?",
        a: "Most carpets are touch-dry within a few hours, depending on airflow, weather, and carpet thickness.",
      },
      {
        q: "Is it safe for kids and pets?",
        a: "Yes. We use eco-friendly products and professional extraction methods suitable for family homes.",
      },
    ],
  },
  "vacate-cleaning": {
    slug: "vacate-cleaning",
    title: "Vacate Cleaning",
    eyebrow: "Bond-ready end of lease cleaning",
    heroDescription:
      "Comprehensive vacate cleans for tenants, landlords, and property managers with a detailed, checklist-based approach.",
    metaTitle: "Vacate Cleaning Perth | Sparkletic",
    metaDescription:
      "End-of-lease vacate cleaning in Perth with bond-focused attention to detail for rentals and managed properties.",
    intro:
      "We clean with real estate expectations in mind so your property is presented in a bond-ready condition.",
    includes: [
      "Kitchen deep clean including surfaces and appliances",
      "Bathrooms and wet areas sanitised",
      "Skirting boards, internal glass, and dusting",
      "Vacuuming and mopping throughout",
      "Optional carpet steam add-on for full handover readiness",
    ],
    outcomes: [
      "Cleaner presentation for final inspection",
      "Less stress during handover",
      "A practical path toward full bond return",
    ],
    faqs: [
      {
        q: "Do you follow real estate checklists?",
        a: "Yes. We can align the clean to your agent or property manager checklist where provided.",
      },
      {
        q: "Can I combine vacate and carpet cleaning?",
        a: "Absolutely. Bundling both services is common and helps streamline move-out timelines.",
      },
    ],
  },
  "tile-grout-cleaning": {
    slug: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    eyebrow: "High-pressure tile and grout restoration",
    heroDescription:
      "Professional tile and grout cleaning to lift embedded grime and restore the natural look of your tiled areas.",
    metaTitle: "Tile & Grout Cleaning Perth | Sparkletic",
    metaDescription:
      "Professional tile and grout cleaning in Perth for kitchens, bathrooms, and high-traffic floors.",
    intro:
      "Using specialist equipment and controlled pressure, we clean deeply without the harshness of DIY scrubbing.",
    includes: [
      "Surface inspection and material check",
      "Grout line pre-treatment",
      "Deep pressure cleaning and extraction",
      "Detailing edges and hard-to-reach areas",
      "Optional sealing guidance post-clean",
    ],
    outcomes: [
      "Brighter grout lines",
      "Cleaner, safer hard floors",
      "Reduced buildup in high-moisture areas",
    ],
    faqs: [
      {
        q: "Can stained grout be improved?",
        a: "Yes, most staining improves significantly. Final results depend on age, porosity, and prior damage.",
      },
      {
        q: "Do you clean bathrooms and shower tiles?",
        a: "Yes. Bathrooms, kitchens, and general floor tiles are all covered.",
      },
    ],
  },
  "rug-cleaning": {
    slug: "rug-cleaning",
    title: "Rug Cleaning",
    eyebrow: "Specialist care for valuable rugs",
    heroDescription:
      "Care-focused rug cleaning for modern and delicate rugs, including wool and specialty fibres.",
    metaTitle: "Rug Cleaning Perth | Sparkletic",
    metaDescription:
      "Professional rug cleaning services in Perth with fibre-safe treatment and careful stain handling.",
    intro:
      "Rugs require tailored care. We assess fibre type, construction, and condition before selecting treatment steps.",
    includes: [
      "Fibre and dye stability check",
      "Dust and soil removal",
      "Spot treatment and odour control",
      "Deep clean with fibre-appropriate method",
      "Final grooming and drying recommendations",
    ],
    outcomes: [
      "Cleaner appearance without fibre damage",
      "Reduced odours and trapped dust",
      "Extended rug lifespan with proper maintenance",
    ],
    faqs: [
      {
        q: "Do you clean wool or delicate rugs?",
        a: "Yes. We adapt products and method to suit delicate materials and colour sensitivity.",
      },
      {
        q: "Can pet stains be treated?",
        a: "Yes. We provide targeted stain and odour treatment where fibre condition allows.",
      },
    ],
  },
  "upholstery-cleaning": {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    eyebrow: "Freshen sofas, chairs, and fabric furniture",
    heroDescription:
      "Safe upholstery cleaning that removes buildup, odours, and everyday staining while protecting fabric condition.",
    metaTitle: "Upholstery Cleaning Perth | Sparkletic",
    metaDescription:
      "Professional upholstery cleaning in Perth for sofas, lounges, and fabric furniture using eco-safe methods.",
    intro:
      "Your furniture sees daily use. We help restore freshness and comfort with careful, fabric-appropriate cleaning.",
    includes: [
      "Fabric type assessment and testing",
      "Targeted stain pre-treatment",
      "Deep extraction or low-moisture cleaning as needed",
      "Odour neutralisation options",
      "Drying and aftercare advice",
    ],
    outcomes: [
      "Cleaner, brighter furniture fabric",
      "Reduced odours and allergens",
      "Better comfort and indoor freshness",
    ],
    faqs: [
      {
        q: "Can you clean large sectionals?",
        a: "Yes. We clean all common lounge sizes and configurations.",
      },
      {
        q: "Will upholstery be soaked?",
        a: "No. We control moisture based on fabric type to support safer drying and finish quality.",
      },
    ],
  },
  "window-cleaning": {
    slug: "window-cleaning",
    title: "Window Cleaning",
    eyebrow: "Streak-free windows for homes and businesses",
    heroDescription:
      "Professional window cleaning for clear, streak-free glass and improved curb appeal across residential and commercial properties.",
    metaTitle: "Window Cleaning Perth | Sparkletic",
    metaDescription:
      "Reliable window cleaning in Perth for homes and businesses, including internal and external glass.",
    intro:
      "Clean windows transform how a property looks and feels. We deliver consistent, detail-focused results.",
    includes: [
      "Internal and external glass cleaning",
      "Frame and sill wipe-down",
      "Spot and residue removal",
      "Detail finishing for streak-free clarity",
      "Flexible scheduling for homes and businesses",
    ],
    outcomes: [
      "Clearer natural light indoors",
      "Improved property presentation",
      "Reliable finish with fewer streaks and marks",
    ],
    faqs: [
      {
        q: "Do you handle commercial windows?",
        a: "Yes. We service both residential and commercial properties.",
      },
      {
        q: "Can you clean both inside and outside?",
        a: "Yes. We offer inside-only, outside-only, or full internal/external service.",
      },
    ],
  },
};

export const SERVICES_ORDER: ServiceSlug[] = [
  "carpet-cleaning",
  "vacate-cleaning",
  "tile-grout-cleaning",
  "rug-cleaning",
  "upholstery-cleaning",
  "window-cleaning",
];

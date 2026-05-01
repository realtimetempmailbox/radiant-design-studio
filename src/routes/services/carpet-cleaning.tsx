import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { SERVICES_CONTENT } from "@/content/services";

const content = SERVICES_CONTENT["carpet-cleaning"];

export const Route = createFileRoute("/services/carpet-cleaning")({
  head: () => ({
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
    ],
  }),
  component: CarpetCleaningPage,
});

function CarpetCleaningPage() {
  return <ServicePage slug="carpet-cleaning" />;
}
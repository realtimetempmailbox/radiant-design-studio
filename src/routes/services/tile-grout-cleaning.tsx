import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { SERVICES_CONTENT } from "@/content/services";

const content = SERVICES_CONTENT["tile-grout-cleaning"];

export const Route = createFileRoute("/services/tile-grout-cleaning")({
  head: () => ({
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
    ],
  }),
  component: TileGroutCleaningPage,
});

function TileGroutCleaningPage() {
  return <ServicePage slug="tile-grout-cleaning" />;
}
import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { SERVICES_CONTENT } from "@/content/services";

const content = SERVICES_CONTENT["window-cleaning"];

export const Route = createFileRoute("/services/window-cleaning")({
  head: () => ({
    meta: [
      { title: content.metaTitle },
      { name: "description", content: content.metaDescription },
      { property: "og:title", content: content.metaTitle },
      { property: "og:description", content: content.metaDescription },
    ],
  }),
  component: WindowCleaningPage,
});

function WindowCleaningPage() {
  return <ServicePage slug="window-cleaning" />;
}
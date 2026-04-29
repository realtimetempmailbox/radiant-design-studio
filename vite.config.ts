import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      force: true,
      include: ["react", "react-dom", "@tanstack/react-router"],
    },
    server: {
      hmr: true,
    },
  },
});
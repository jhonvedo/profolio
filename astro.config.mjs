import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  defaultLocale: "es",
  locales: ["es", "en"],
  routing: {
      prefixDefaultLocale: true,

  },
  vite: {
    json: {
      namedExports: true, // This allows named exports from JSON files
    },
  },
});
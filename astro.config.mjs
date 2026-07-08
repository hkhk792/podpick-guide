import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://podpickguide.com",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/lanavap-news-10"),
      serialize(item) {
        return {
          ...item,
          lastmod: new Date(),
        };
      },
    }),
  ],
  trailingSlash: "never",
});

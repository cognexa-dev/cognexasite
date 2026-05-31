// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://cognexa.in",
  adapter: vercel(),
  output: "server",
  integrations: [sitemap()],
});

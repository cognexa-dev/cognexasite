// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://cognexa.in",
  adapter: node({ mode: "standalone" }),
  output: "server",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

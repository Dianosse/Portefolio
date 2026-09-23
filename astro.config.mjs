import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Dianosse.github.io",
  base: "/Portefolio",

  vite: {
    plugins: [tailwindcss()]
  }
});
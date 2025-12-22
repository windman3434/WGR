import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en/index.html"),
        pl: resolve(__dirname, "pl/index.html"),
        enRegister: resolve(__dirname, "en/register.html"),
        enTeam: resolve(__dirname, "en/team.html"),
        enPartners: resolve(__dirname, "en/partners.html"),
        plRegister: resolve(__dirname, "pl/register.html"),
        plTeam: resolve(__dirname, "pl/team.html"),
        plPartners: resolve(__dirname, "pl/partners.html"),
      },
    },
  },
});

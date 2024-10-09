import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "tailwindcss";
import { config } from "vinxi/plugins/config";

export default defineConfig({
  server: {
    preset: "vercel",
  },
  ssr: false,
  vite: {
    plugins: [
      tsconfigPaths(),
      config("tailwind", {
        css: {
          postcss: {
            plugins: [tailwindcss]
          }
        }
      } as any)
    ],
  }
});

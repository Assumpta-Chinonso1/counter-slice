import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      tailwindConfig: {
        darkMode: "class",
        content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: { extend: {} },
        plugins: [],
      },
    }),
  ],
});

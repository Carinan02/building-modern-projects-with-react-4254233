import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://glowing-space-halibut-jj5qvpppv4r6h55jp-3000.app.github.dev",
        changeOrigin: true,
      },
    },
  },
});

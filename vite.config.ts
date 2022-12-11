import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({
    algorithm:"brotliCompress"
  })],
  build: {
    chunkSizeWarningLimit: 2500,
  },
});

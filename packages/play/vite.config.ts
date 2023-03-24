import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "./test"
  },
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    open: false,
    port: 520
  },
});

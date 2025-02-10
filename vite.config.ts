import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@data": path.resolve(__dirname, "./src/assets/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});

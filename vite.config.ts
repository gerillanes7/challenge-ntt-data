import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development";
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      minify: isProduction ? "terser" : false,
      rollupOptions: {
        output: {
          entryFileNames: isProduction ? "[name]-[hash].js" : "[name].js",
          chunkFileNames: isProduction ? "[name]-[hash].js" : "[name].js",
          assetFileNames: isProduction
            ? "[name]-[hash][extname]"
            : "[name][extname]",
        },
      },
    },
    server: {
      hmr: isDevelopment,
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/albums": "http://localhost:8085", // Replace with your GIN server URL
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

const serverPreviewSharedOptions = {
  host: "0.0.0.0",
  port: 3000,
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  base: "/",
  server: { ...serverPreviewSharedOptions },
  preview: { ...serverPreviewSharedOptions },
})

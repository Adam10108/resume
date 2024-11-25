import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const serverPreviewSharedOptions = {
  host: "0.0.0.0",
  port: 3000,
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: { ...serverPreviewSharedOptions },
  preview: { ...serverPreviewSharedOptions },
})

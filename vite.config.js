import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const HMR_HOST = process.env.VITE_HMR_HOST || process.env.HOST || "localhost";
const HMR_PORT = Number(process.env.VITE_HMR_CLIENT_PORT || process.env.PORT || 5173);

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  plugins: [
    react(), 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  server: {
    host: true,            // bind to all interfaces (useful in WSL/Docker)
    port: 5173,
    strictPort: false,
    watch: {
      // use polling in some environments (WSL, Docker, network FS)
      usePolling: true,  // helps in some environments where file changes are not detected
    },
    hmr: {
      protocol: "ws",
      host: HMR_HOST,
      port: HMR_PORT,
      clientPort: HMR_PORT,
    }
  },
  preview: {
    port: 5173
  }
})

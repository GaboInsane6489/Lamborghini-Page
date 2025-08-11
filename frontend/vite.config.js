// vite.config.js

// ⚙️ Configuración principal de Vite para proyectos React
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), // 🧩 Habilita soporte para JSX, Fast Refresh y más
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 🔗 Acceso directo a la carpeta src
    },
  },
  server: {
    port: 5173, // 🌐 Puerto personalizado (opcional)
    open: true, // 🚀 Abre el navegador automáticamente al iniciar
  },
  build: {
    outDir: 'dist', // 📦 Carpeta de salida para producción
    sourcemap: true, // 🐞 Útil para debugging en producción
  },
});






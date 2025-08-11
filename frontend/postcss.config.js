// postcss.config.js

// 🎨 Configuración de PostCSS para Tailwind y compatibilidad cross-browser
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        tailwindcss,   // 💎 Utiliza Tailwind como motor de estilos utilitarios
        autoprefixer,  // 🌍 Agrega prefijos para compatibilidad con navegadores
    ],
};


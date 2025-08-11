// src/main.jsx

// 🚀 Punto de entrada principal para la aplicación React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 Componente raíz
import './index.css';        // 🎨 Estilos globales (Tailwind + personalizados)

const rootElement = document.getElementById('root');

// 🧠 Renderizado con modo estricto para detectar errores potenciales
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx

// 🚀 Componente raíz de la aplicación Lamborghini Experience
import React, { useRef } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import VideoControls from "./components/VideoControls";
import AnimatedTitle from "./components/AnimatedTitle";
import ModelosSection from "./components/ModelosSection";

function App() {
  const videoRef = useRef(null); // 🎥 Referencia para controlar el video

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500 min-h-screen outline-none focus:outline-none">
        
        {/* 🧭 Navegación principal */}
        <Navbar />

        {/* 🎬 Video de fondo con controles personalizados */}
        <HeroVideo ref={videoRef} />

        {/* 🌘 Overlay para contraste visual */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full bg-black/30 dark:bg-black/60 outline-none focus:outline-none" />
        </div>

        {/* 🏎️ Contenido principal con animaciones */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 h-screen outline-none focus:outline-none">
          <AnimatedTitle />
        </div>

        {/* 🎛️ Controles del video */}
        <VideoControls videoRef={videoRef} />

        {/* 🚗 Sección de modelos Lamborghini */}
        <ModelosSection />
      </div>
    </ThemeProvider>
  );
}

export default App;




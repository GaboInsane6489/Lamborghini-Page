import React, { useRef } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import VideoControls from "./components/VideoControls";
import AnimatedTitle from "./components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import ModelosSection from "./components/ModelosSection";
import { motion } from "framer-motion";

function App() {
  const videoRef = useRef(null);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-500 min-h-screen outline-none focus:outline-none">
        <Navbar />
        <HeroVideo ref={videoRef} />

        {/* Overlay para contraste */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full bg-black/30 dark:bg-black/60 outline-none focus:outline-none"/>
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 h-screen outline-none focus:outline-none">
          <AnimatedTitle />

          {/* Botón estilo Lamborghini */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="absolute left-8 top-[65%]"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black dark:text-white font-bold px-8 py-4 rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white"
            >
              DESCUBRIR MÁS
            </Button>
          </motion.div>
        </div>

        <VideoControls videoRef={videoRef} />

        <ModelosSection />
      </div>
    </ThemeProvider>
  );
}

export default App;


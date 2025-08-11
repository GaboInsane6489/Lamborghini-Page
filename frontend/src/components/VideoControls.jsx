// src/components/VideoControls.jsx

import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoControls({ videoRef }) {
    const [paused, setPaused] = useState(false);

    const togglePlayback = () => {
        if (videoRef.current) {
            paused ? videoRef.current.play() : videoRef.current.pause();
            setPaused(!paused);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            className="absolute bottom-6 right-6 z-10 flex items-center gap-3 outline-none focus:outline-none"
        >
            {/* 🎛️ Indicadores visuales (pueden ser barras de progreso o decorativos) */}
                <div className="h-1 w-16 bg-white/70 rounded-full" />
                <div className="h-1 w-16 bg-white/70 rounded-full" />

            {/* ⏯️ Botón de reproducción/pausa con estilo premium */}
            <button
                onClick={togglePlayback}
                aria-label={paused ? "Reproducir video" : "Pausar video"}
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black dark:text-white font-semibold rounded-full shadow-md hover:scale-105 hover:brightness-110 transition-all duration-300 border-2 border-transparent hover:border-white focus:outline-none"
            >
                {paused ? "▶️" : "⏸️"}
            </button>
        </motion.div>
    );
}

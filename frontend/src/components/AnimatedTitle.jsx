import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/fonts.css"; 

const titles = [
    "Lamborguini",
    "El rugido de la velocidad",
    "Control total",
    "Experiencia Lamborghini",
];

export default function AnimatedTitle() {
    const [index, setIndex] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % titles.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-1/3 left-6 z-20 outline-none focus:outline-none">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={titles[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                    className={`text-5xl font-bold transition-colors duration-500 font-orbitron outline-none focus:outline-none
                    ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                >
                    {titles[index]}
                </motion.h1>
            </AnimatePresence>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

const titles = [
    "Diseño Premium",
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
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h1
        className={`absolute top-1/3 left-6 text-5xl font-bold animate-slide-in transition-colors duration-500 outline-none focus:outline-none
            ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
        >
            {titles[index]}
        </h1>
    );
}

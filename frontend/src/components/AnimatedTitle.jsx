import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useTheme } from "@/components/theme-provider";

const titles = [
    {
        title: "Diseño que acelera el pulso",
        description: "Explora la experiencia Lamborghini con visuales que rugen estilo.",
    },
    {
        title: "Potencia visual sin límites",
        description: "Animaciones, gradientes y dark mode que te llevan al siguiente nivel.",
    },
    {
        title: "Frontend modular, backend brutal",
        description: "Escala tu proyecto con arquitectura limpia y autenticación premium.",
    },
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

    const titleColor = theme === "dark" ? "#fff" : "#111";
    const descriptionColor = theme === "dark" ? "#ccc" : "#333";

    return (
        <div className="absolute top-1/3 left-6 z-20 flex flex-col gap-6 backdrop-blur-sm p-6 rounded-xl outline-none focus:outline-none">
            <Title text={titles[index].title} color={titleColor} />
            <Description text={titles[index].description} color={descriptionColor} />
            <SocialIcons color={descriptionColor} />
            <AnimatedButton />
        </div>
    );
}

// 🏎️ Título animado desde abajo
function Title({ text, color }) {
    return (
        <AnimatePresence mode="wait">
            <motion.h1
                key={text}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1 }}
                style={{ color }}
                className="text-5xl font-bold font-orbitron drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] outline-none focus:outline-none"
            >
                {text}
            </motion.h1>
        </AnimatePresence>
    );
}

// 🧾 Descripción animada desde la izquierda
function Description({ text, color }) {
    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={text}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ color }}
                className="text-lg font-medium max-w-xl drop-shadow-sm outline-none focus:outline-none"
            >
                {text}
            </motion.p>
        </AnimatePresence>
    );
}

// 📱 Redes sociales animadas desde la derecha
function SocialIcons({ color }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6 mt-2 outline-none focus:outline-none"
        >
            <span style={{ color }} className="text-sm uppercase font-semibold outline-none focus:outline-none">
                Follow me:
            </span>
            <FaGithub className="text-xl hover:text-orange-500 transition-colors duration-300 cursor-pointer outline-none focus:outline-none" />
            <FaInstagram className="text-xl hover:text-pink-500 transition-colors duration-300 cursor-pointer outline-none focus:outline-none" />
            <FaWhatsapp className="text-xl hover:text-green-500 transition-colors duration-300 cursor-pointer outline-none focus:outline-none" />
            <FaLinkedin className="text-xl hover:text-blue-500 transition-colors duration-300 cursor-pointer outline-none focus:outline-none" />
        </motion.div>
    );
}

// 🚀 Botón animado desde abajo con zoom y scroll automático
function AnimatedButton() {
    const handleClick = () => {
        const target = document.getElementById("modelos");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-black dark:text-white hover:brightness-110 hover:scale-105 shadow-lg border-2 border-transparent hover:border-white h-12 px-6 py-3 outline-none"
        >
            DESCUBRIR MÁS
        </motion.button>
    );
}

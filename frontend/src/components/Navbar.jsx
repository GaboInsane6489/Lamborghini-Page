import React from "react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";


export default function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <nav
            className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 py-5 transition-colors duration-500 backdrop-blur-md
            ${theme === "dark"
            ? "bg-gradient-to-r from-black via-zinc-900 to-black text-white"
            : "bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 text-zinc-900"}`}
        >
            {/* Navegación izquierda */}
            <div className="flex gap-6 font-semibold tracking-wide text-sm uppercase border-none outline-none focus:outline-none">
                {["Inicio", "Modelos", "Galería"].map((item) => (
                    <button
                        key={item}
                        className="hover:text-orange-500 transition-colors duration-300 border-none outline-none focus:outline-none"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Marca central */}
            <div className="text-2xl font-extrabold tracking-widest uppercase border-none outline-none focus:outline-none">
                Lamborghini
            </div>

            {/* Controles derecha */}
            <div className="flex items-center gap-4 border-none outline-none focus:outline-none">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className={`bg-transparent border-b focus:outline-none px-2 py-1 text-sm transition-all duration-300
                    ${theme === "dark"
                    ? "border-white text-white placeholder-white focus:border-orange-500 border-none"
                    : "border-zinc-900 text-zinc-900 placeholder-zinc-500 focus:border-orange-600 border-none"}`}
                />
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full border transition-all duration-300 hover:scale-105
                    dark:border-white dark:text-white border-zinc-900 text-zinc-900 border-none outline-none focus:outline-none"
                    >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                {/* Avatar de usuario y menu desplegable con animaciones*/}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="Usuario" />
                                    <AvatarFallback>GG</AvatarFallback>
                                </Avatar>
                            </span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            sideOffset={12}
                            className="bg-white dark:bg-zinc-900 text-base rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700 p-2 min-w-[180px]"
                        >
                            <DropdownMenuItem onClick={() => console.log("Ir al perfil")} className="px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
                                Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => console.log("Abrir configuración")} className="px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
                                Configuración
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => console.log("Cerrar sesión")}
                                className="px-3 py-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-md"
                            >
                                Cerrar sesión
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

            </div>
        </nav>
    );
}


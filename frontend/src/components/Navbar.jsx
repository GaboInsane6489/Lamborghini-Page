// src/components/Navbar.jsx

import React, { useState } from "react";
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
import { useAuth } from "@/hooks/useAuth";
import LoginModal from "@/components/auth/LoginModal";
import RegisterModal from "@/components/auth/RegisterModal";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const { user } = useAuth();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const navItems = ["Inicio", "Modelos", "Galería"];

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md transition-colors duration-500 outline-none focus:outline-none
            ${theme === "dark"
            ? "bg-gradient-to-r from-black via-zinc-900 to-black text-white"
            : "bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 text-zinc-900"}`}
        >
            {/* 🔗 Navegación izquierda */}
            <div className="flex gap-6 font-semibold tracking-wide text-sm uppercase outline-none focus:outline-none">
                {navItems.map((item) => (
                    <button
                        key={item}
                        className="hover:text-orange-500 transition-colors duration-300 outline-none"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* 🚗 Marca central */}
            <div className="text-2xl font-extrabold tracking-widest uppercase outline-none focus:outline-none">
                Lamborghini
            </div>

            {/* 🎛️ Controles derecha */}
            <div className="flex items-center gap-4 outline-none focus:outline-none">
                {/* 🔍 Buscador */}
                <input
                    type="text"
                    placeholder="Buscar..."
                    className={`bg-transparent border-b px-2 py-1 text-sm transition-all duration-300 outline-none
                    ${theme === "dark"
                    ? "border-white text-white placeholder-white focus:border-orange-500"
                    : "border-zinc-900 text-zinc-900 placeholder-zinc-500 focus:border-orange-600"}`}
                />

                {/* 🌗 Toggle de tema */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full border transition-all duration-300 hover:scale-105
                    dark:border-white dark:text-white border-zinc-900 text-zinc-900 outline-none focus:outline-none"
                    aria-label="Cambiar tema"
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* 👤 Avatar y menú */}
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
                        {user ? (
                            <>
                                <DropdownMenuItem onClick={() => console.log("Ir al perfil")}>
                                    Perfil
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => console.log("Abrir configuración")}>
                                    Configuración
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:text-red-700 dark:hover:text-red-300">
                                    Cerrar sesión
                                </DropdownMenuItem>
                            </>
                        ) : (
                            <>
                                <DropdownMenuItem onClick={() => setShowLogin(true)}>
                                    Ingresar usuario
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setShowRegister(true)}>
                                    Crear usuario
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* 🧾 Modales */}
            <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
            <RegisterModal open={showRegister} onClose={() => setShowRegister(false)} />
        </nav>
    );
}

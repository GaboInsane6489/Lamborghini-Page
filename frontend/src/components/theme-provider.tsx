import React, { createContext, useContext, useEffect, useState } from "react";

// 🎨 Tipos para el tema y las props del proveedor
type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

// 🧩 Estado inicial por defecto
const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

// 🧠 Contexto que compartirá el estado del tema
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// 🌗 Componente proveedor que gestiona el tema
export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    // 🗃️ Estado del tema, inicializado desde localStorage o por defecto
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    );

    // 🧼 Efecto que aplica la clase correspondiente al <html> según el tema
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);

    // 📦 Valor que se compartirá vía contexto
    const value: ThemeProviderState = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

// 🪄 Hook personalizado para acceder al contexto del tema
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

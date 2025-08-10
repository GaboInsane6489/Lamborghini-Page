// Importamos React y hooks necesarios
import { useState } from "react";

// Importamos componentes del modal desde ShadCN UI
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

// Inputs y botón estilizados
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sonner para notificaciones tipo toast
import { toast } from "sonner";

// ✅ Tipamos las props que recibe el componente
interface RegisterModalProps {
    open: boolean; // controla si el modal está abierto
    onClose: () => void; // función para cerrar el modal
}

// ✅ Componente principal con props tipadas
export default function RegisterModal({ open, onClose }: RegisterModalProps) {
    // Estados locales para los campos del formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Función que maneja el registro del usuario
    const handleRegister = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Usuario creado correctamente");
                localStorage.setItem("user", JSON.stringify({ name, email }));
                onClose(); // cerramos el modal
                window.location.reload(); // recargamos la página
            } else {
                toast.error(data.message || "Error en el registro");
            }
        } catch (error) {
            toast.error("No se pudo conectar con el servidor");
        }
    };

    // Render del modal con inputs y botón
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-center text-white">
                        Crear cuenta
                    </DialogTitle>
                    <DialogDescription className="text-sm text-zinc-400 text-center mt-1">
                        Ingresa tus datos para registrarte en la plataforma.
                    </DialogDescription>
                </DialogHeader>

                {/* Input para el nombre */}
                <Input
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 text-white placeholder:text-zinc-400"
                />

                {/* Input para el correo */}
                <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 text-white placeholder:text-zinc-400 bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-orange-500"
                />

                {/* Input para la contraseña */}
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 text-white placeholder:text-zinc-400 bg-zinc-800 border border-zinc-700 focus:ring-2   focus:ring-orange-500"
                />

                {/* Botón para enviar el formulario */}
                    <Button onClick={handleRegister} className="mt-4 w-full">
                        Crear cuenta
                    </Button>
            </DialogContent>

        </Dialog>
    );
}

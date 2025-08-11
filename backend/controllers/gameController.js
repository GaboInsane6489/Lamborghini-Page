// 🎮 Controlador de recompensa por actividad en el juego
import User from "../models/User.js";

/**
     * Acumula dinero virtual para el usuario autenticado.
     * Se puede usar tras completar una misión, ganar una carrera, etc.
*/
export const acumularDinero = async (req, res) => {
    const userId = req.user?.id;

    try {
        // 🔍 Validamos existencia de ID
        if (!userId) {
        return res.status(400).json({ message: "ID de usuario no proporcionado" });
        }

        // 🧑‍💻 Buscamos al usuario en la base de datos
        const user = await User.findById(userId);

        if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // 💰 Incrementamos el saldo (puede escalarse con lógica de recompensa)
        user.saldo = (user.saldo || 0) + 100;
        await user.save();

        // 📤 Respondemos con el nuevo saldo
        res.status(200).json({ saldo: user.saldo });
    } catch (error) {
        console.error("❌ Error en recompensa:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


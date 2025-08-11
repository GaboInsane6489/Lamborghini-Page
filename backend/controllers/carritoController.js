// controllers/carritoController.js

import Carrito from "../models/Carrito.js";
import User from "../models/User.js";
import Producto from "../models/Producto.js";

// 🛒 Controlador para procesar la compra del carrito
export const comprarCarrito = async (req, res) => {
    const userId = req.user.id; // ID del usuario autenticado (extraído del token)

    try {
        // 🔍 Buscar el carrito del usuario y poblar los productos con sus datos completos
        const carrito = await Carrito.findOne({ usuario: userId }).populate("productos");

        // ⚠️ Validar que el carrito exista y tenga productos
        if (!carrito || carrito.productos.length === 0) {
            return res.status(400).json({ message: "El carrito está vacío" });
        }

        // 👤 Obtener el usuario desde la base de datos
        const user = await User.findById(userId);

        // 💰 Calcular el total a pagar
        const total = carrito.total;

        // 🚫 Verificar si el usuario tiene saldo suficiente
        if (user.saldo < total) {
            return res.status(403).json({ message: "Saldo insuficiente para completar la compra" });
        }

        // ✅ Descontar el total del saldo del usuario
        user.saldo -= total;
        await user.save(); // Guardar el nuevo saldo

        // 🧹 Vaciar el carrito y reiniciar sus valores
        carrito.productos = []; // Eliminar productos del carrito
        carrito.total = 0; // Reiniciar el total
        carrito.descuentoAplicado = false; // Reiniciar flag de descuento
        await carrito.save(); // Guardar cambios en el carrito

        // 📦 Responder con éxito y nuevo saldo
        res.status(200).json({
            message: "Compra realizada con éxito",
            nuevoSaldo: user.saldo
        });
    } catch (error) {
        // 🐞 Capturar errores inesperados y responder con error genérico
        console.error("Error al comprar:", error);
        res.status(500).json({ message: "Error interno al procesar la compra" });
    }
};

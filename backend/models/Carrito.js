// models/Carrito.js

import mongoose from "mongoose";

/**
     * 🛒 Esquema para el carrito de compras
     *    Cada usuario tiene un carrito con productos referenciados
*/
const carritoSchema = new mongoose.Schema({
    // 👤 Usuario propietario del carrito
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    // 📦 Lista de productos en el carrito
    productos: [
        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Producto",
                required: true
            },
            cantidad: {
                type: Number,
                default: 1,
                min: 1
            }
        }
    ],

    // 💰 Total calculado del carrito
    total: {
        type: Number,
        default: 0,
        min: 0
    },

    // 🎁 Indica si se aplicó descuento visual premium
    descuentoAplicado: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // 🕒 Guarda fecha de creación y actualización
});

// 🚀 Exportamos el modelo
export default mongoose.model("Carrito", carritoSchema);

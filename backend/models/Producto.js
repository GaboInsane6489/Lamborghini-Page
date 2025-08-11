// models/Producto.js

import mongoose from "mongoose";

// 🧩 Esquema para productos tipo Lamborghini
const productoSchema = new mongoose.Schema({
    // 🏷️ Nombre del modelo (ej. Aventador, Huracán)
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    // 💰 Precio en dólares
    precio: {
        type: Number,
        required: true,
        min: 0
    },

    // 🖼️ Imagen del producto (URL o ruta local)
    imagen: {
        type: String,
        required: true
    },

    // 📝 Descripción visual premium
    descripcion: {
        type: String,
        default: "Sin descripción"
    },

    // 🎨 Categoría o edición especial (opcional)
    categoria: {
        type: String,
        enum: ["Edición limitada", "Híbrido", "Clásico", "Concepto"],
        default: "Clásico"
    },

    // 📦 Disponibilidad en stock
    disponible: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true // 🕒 Guarda fecha de creación y actualización
});

// 🚀 Exportar el modelo para usar en controladores y rutas
export default mongoose.model("Producto", productoSchema);


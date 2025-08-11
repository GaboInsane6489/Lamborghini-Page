// models/User.js

// 🧠 Modelo de datos para usuarios registrados en el sistema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "El correo es obligatorio"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "La contraseña es obligatoria"],
        },
        saldo: {
            type: Number,
            default: 0,
            min: [0, "El saldo no puede ser negativo"],
        },
    },
    {
        timestamps: true, // 🕒 Agrega createdAt y updatedAt automáticamente
    }
);

// 🧩 Modelo exportado para uso en controladores y rutas
const User = mongoose.model("User", userSchema);
export default User;


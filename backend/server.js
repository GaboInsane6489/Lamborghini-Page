// server.js

// 🧩 Dependencias principales
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// 📦 Rutas del proyecto
import authRoutes from "./routes/auth.js";
import carritoRoutes from "./routes/carrito.js";
import gameRoutes from "./routes/game.js";

// 🚀 Inicializamos la app
const app = express();

// 🛡️ Middleware global
app.use(express.json()); // Parseo de JSON
app.use(cors({
    origin: "http://localhost:5173", // Frontend Vite
    credentials: true               // Cookies y headers personalizados
}));

// 🔗 Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/lamborghini")
    .then(() => console.log("✅ MongoDB conectado"))
    .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// 🧪 Ruta base para verificar estado del backend
app.get("/", (req, res) => {
    res.send("API Lamborghini activa 🚀");
});

// 📌 Rutas principales
app.use("/api", authRoutes);             // Autenticación
app.use("/api/carrito", carritoRoutes);  // Carrito de compras
app.use("/api/game", gameRoutes);        // Juegos o catálogo

// 🟢 Inicialización del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});




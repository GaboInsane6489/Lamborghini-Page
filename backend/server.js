
// ✅ Importamos dependencias principales
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// ✅ Importamos rutas de autenticación
import authRoutes from "./routes/auth.js";

// ✅ Inicializamos la app
const app = express();

// ✅ Middleware para parsear JSON en las peticiones
app.use(express.json());

// ✅ Configuramos CORS antes de montar rutas
app.use(cors({
    origin: "http://localhost:5173", // permite peticiones desde tu frontend Vite
    credentials: true,               // habilita cookies y headers personalizados
}));

// ✅ Conexión a MongoDB (local)
mongoose.connect("mongodb://localhost:27017/lamborghini")
    .then(() => console.log("✅ MongoDB conectado"))
    .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// ✅ Ruta base para verificar que el backend está activo
app.get("/", (req, res) => {
    res.send("API Lamborghini activa 🚀");
});

// ✅ Montamos las rutas de autenticación bajo /api
app.use("/api", authRoutes);

// ✅ Iniciamos el servidor en el puerto 5000
app.listen(5000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:5000");
});




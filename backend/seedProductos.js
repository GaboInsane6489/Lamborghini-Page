// seedProductos.js

// 📦 Importamos dependencias
import mongoose from "mongoose";
import dotenv from "dotenv";
import Producto from "./models/Producto.js";

// 🔐 Cargamos variables de entorno (.env)
dotenv.config();

// 🏎️ Array de productos Lamborghini
const productos = [
    {
        nombre: "Lamborghini Aventador SVJ",
        precio: 1200000,
        imagen: "/images/aventador.jpg",
        descripcion: "Motor V12, diseño agresivo y aerodinámica activa. Edición limitada.",
        categoria: "Edición limitada"
    },
    {
        nombre: "Lamborghini Huracán EVO",
        precio: 800000,
        imagen: "/images/huracan.jpg",
        descripcion: "V10 atmosférico, tracción total y experiencia de conducción visceral.",
        categoria: "Clásico"
    },
    {
        nombre: "Lamborghini Revuelto",
        precio: 1500000,
        imagen: "/images/revuelto.jpg",
        descripcion: "Híbrido enchufable con 1000+ HP. Futuro y tradición en un solo modelo.",
        categoria: "Híbrido"
    }
];

// 🚀 Función para insertar productos en la base de datos
const seedDB = async () => {
    try {
        // 🔗 Conexión a MongoDB usando MONGO_URI del .env
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ Conectado a MongoDB");

        // 🧹 Limpiamos la colección antes de insertar
        await Producto.deleteMany({});
        console.log("🧼 Colección de productos limpiada");

        // 📥 Insertamos los nuevos productos
        await Producto.insertMany(productos);
        console.log("✅ Productos Lamborghini insertados correctamente");

        // 🔒 Cerramos la conexión
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error al insertar productos:", error);
        mongoose.connection.close();
    }
};

// 🟢 Ejecutamos el seeder
seedDB();

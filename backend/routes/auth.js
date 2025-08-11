// routes/auth.js

// 🔐 Rutas relacionadas con autenticación y gestión de usuarios
import express from "express";
import {
    registerUser,
    loginUser,
    getUser,
    updateUser
} from "../controllers/authController.js";

const router = express.Router();

/**
     *  @route   POST /api/auth/register
     *  @desc    Registra un nuevo usuario
     *  @access  Público
*/
router.post("/register", registerUser);

/**
     *  @route   POST /api/auth/login
     *  @desc    Inicia sesión y devuelve token JWT
     *  @access  Público
*/
router.post("/login", loginUser);

/**
     *  @route   GET /api/auth/user/:id
     *  @desc    Obtiene datos del usuario por ID
     *  @access  Privado (requiere token)
 */
router.get("/user/:id", getUser);

/**
     *  @route   PUT /api/auth/user/:id
     *  @desc    Actualiza datos del usuario
     *  @access  Privado (requiere token)
*/
router.put("/user/:id", updateUser);

export default router;

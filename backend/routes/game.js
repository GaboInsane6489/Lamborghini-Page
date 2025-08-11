// routes/game.js

// 🎮 Rutas relacionadas con la lógica del videojuego 2D
import express from "express";
import { acumularDinero } from "../controllers/gameController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
     *  @route   POST /api/game/recompensa
     *  @desc    Acumula dinero virtual por segundo de juego activo
     *  @access  Privado (requiere token JWT)
*/
router.post("/recompensa", verifyToken, acumularDinero);

export default router;


// routes/carrito.js

import express from "express";
import {
     agregarAlCarrito,
     comprarCarrito
} from "../controllers/carritoController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
     *  @route   POST /api/carrito/agregar
     *  @desc    Agrega un producto al carrito del usuario autenticado
     *  @access  Privado
*/
router.post("/agregar", verifyToken, agregarAlCarrito);

/**
     *  @route   POST /api/carrito/comprar
     *  @desc    Procesa la compra del carrito del usuario autenticado
     *  @access  Privado
*/
router.post("/comprar", verifyToken, comprarCarrito);

export default router;

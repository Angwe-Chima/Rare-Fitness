import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controller/orderController.js";


import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

// Create a new order
router.post("/", authMiddleware, createOrder);

// Get all orders
router.get("/", authMiddleware, getOrders);

// Get a single order by ID
router.get("/:id", authMiddleware, getOrderById);

// Update order status
router.patch("/:id/status", authMiddleware, updateOrderStatus);

export default router;

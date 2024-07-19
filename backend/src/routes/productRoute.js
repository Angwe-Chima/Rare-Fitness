import express from "express";
const router = express.Router();

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

import authMiddleware from "../utils/authMiddleware.js";

// Route to create a new product (protected)
router.post("/", authMiddleware, createProduct);

// Route to get all products
router.get("/", authMiddleware, getProducts);

// Route to get a product by ID
router.get("/:id", authMiddleware, getProductById);

// Route to update a product (protected)
router.put("/:id", authMiddleware, updateProduct);

// Route to delete a product (protected)
router.delete("/:id", authMiddleware, deleteProduct);

export default router;

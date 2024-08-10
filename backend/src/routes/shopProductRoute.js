import express from "express";
const router = express.Router();

import {getShopProducts, getShopProductById} from '../controller/shopProductController.js'

// Route to get all products
router.get("/", getShopProducts);

// Route to get a product by ID
router.get("/:id", getShopProductById);

export default router;
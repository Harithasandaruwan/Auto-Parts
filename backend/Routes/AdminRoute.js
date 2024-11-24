import express from "express";
import { addProduct, getAllProducts, updateProduct, deleteProduct, removeAllParts } from "../controllers/adminController.js";

const router = express.Router();

// Add a product
router.post("/add", addProduct);

// Get all products
router.get("/all", getAllProducts);

// Update a product by ID
router.put("/update/:id", updateProduct);

// Delete a product by ID
router.delete("/delete/:id", deleteProduct);

// Remove all products from the database
router.delete("/remove-all", removeAllParts);

export default router;

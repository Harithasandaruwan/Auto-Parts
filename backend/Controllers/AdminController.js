import { Admin } from "../Models/Admin.js";

// Add a new product
export const addProduct = async (req, res) => {
    try {
        const { email, partName } = req.body;

        // Check if a product with the same email and partName already exists
        const existingProduct = await Admin.findOne({ email, partName });
        if (existingProduct) {
            return res.status(400).json({ message: "This product already exists for this user" });
        }

        // If no duplicate is found, create and save the new product
        const product = new Admin(req.body);
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        if (error.code === 11000) {  // Duplicate key error
            return res.status(400).json({ message: "This product already exists for this user" });
        }
        res.status(400).json({ message: "Error adding product", error: error.message });
    }
};
// Get all products for all users
export const getAllProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Admin.find();

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found in the database." });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products", error: error.message });
    }
};


// Update a product
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Admin.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Validate fields before updating
        });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Admin.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};
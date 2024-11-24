const Admin = require('../Models/Admin');

// Add a product to admin
export const addProductToAdmin = async (req, res) => {
    try {
        const { adminId, productId } = req.body;

        // Find the admin by ID
        const admin = await Admin.findById(adminId);

        // Check if admin exists
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Add the product to the admin's products array
        admin.products.push(productId);

        // Save the updated admin
        await admin.save();

        res.status(200).json({ message: 'Product added to admin successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
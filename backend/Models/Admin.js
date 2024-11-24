import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    partName: {
        type: String,
        required: true
    },

    postedDate: {
        type: Date,
        default: Date.now
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    condition: {
        type: String,
        required: true
    },

    partType: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

}, { timestamps: true });

// Add a compound index to enforce unique email and partName per user
adminSchema.index({ email: 1, partName: 1 }, { unique: true });

export const Admin = mongoose.model('Admin', adminSchema);
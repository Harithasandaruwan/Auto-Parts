import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

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

}, {timestamps: true});

export const Admin = mongoose.model('Admin', adminSchema);
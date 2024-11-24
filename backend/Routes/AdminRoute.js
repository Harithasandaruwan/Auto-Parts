import express from "express";
import { addProductToAdmin } from "../Controllers/AdminController.js";

const router = express.Router();

router.post("/addProduct", addProductToAdmin);
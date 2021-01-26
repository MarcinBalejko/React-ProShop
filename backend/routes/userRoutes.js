import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

// router.get('/', getProducts); would also be okay
router.post("/login", authUser);

export default router;

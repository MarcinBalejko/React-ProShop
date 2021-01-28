import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// router.get('/', getProducts); would also be okay
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;

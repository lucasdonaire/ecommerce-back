import { Router } from "express";
import { ProductController } from "../controllers/productController";

const router = Router();
router
  .get('/product', ProductController.getAllProducts)
  .get('/product/:id', ProductController.getProductById)
  .post('/product', ProductController.createProduct)
  .put('/product/:id', ProductController.updateProduct)
  .delete('/product/:id', ProductController.deleteProduct)

export default router
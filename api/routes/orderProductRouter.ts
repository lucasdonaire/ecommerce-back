import { Router } from "express";
import { ProductOrderController } from "../controllers/productOrderController";

const router = Router();
router
  .get('/productOrder', ProductOrderController.getAllProductOrders)
  .get('/productOrder/:id', ProductOrderController.getProductOrderById)
  .post('/productOrder', ProductOrderController.createProductOrder)
  .put('/productOrder/:id', ProductOrderController.updateProductOrder)
  .delete('/productOrder/:id', ProductOrderController.deleteProductOrder)

export default router
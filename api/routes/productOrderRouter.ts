import { Router } from "express";
import { ProductOrderController } from "../controllers/productOrderController";

const router = Router();
router
  .get('/productOrder/order/:orderId', ProductOrderController.getAllProductOrdersByOrderId)
  .get('/productOrder/:id', ProductOrderController.getProductOrderById)
  .get('/productOrder', ProductOrderController.getAllProductOrders)
  .post('/productOrder', ProductOrderController.createProductOrder)
  .put('/productOrder/:id', ProductOrderController.updateProductOrder)
  .delete('/productOrder/:id', ProductOrderController.deleteProductOrder)

export default router
import { Router } from "express";
import { OrderController } from "../controllers/orderController";

const router = Router();
router
  .get('/order', OrderController.getAllOrders)
  .get('/order/:id', OrderController.getOrderById)
  .post('/order', OrderController.createOrder)
  .put('/order/:id', OrderController.updateOrder)
  .delete('/order/:id', OrderController.deleteOrder)

export default router
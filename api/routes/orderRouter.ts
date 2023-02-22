import { Router } from "express";
import { OrderController } from "../controllers/orderController";

const router = Router();
router
  .get('/order/cart/:clientId', OrderController.getCartByClientId)
  .get('/order/:id', OrderController.getOrderById)
  .get('/order', OrderController.getAllOrders)
  .post('/order', OrderController.createOrder)
  .put('/order/:id', OrderController.updateOrder)
  .delete('/order/:id', OrderController.deleteOrder)

export default router
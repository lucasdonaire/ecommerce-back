import { Router } from "express";
import { ShopController } from "../controllers/shopController";

const router = Router();
router
  .get('/shop', ShopController.getAllShops)
  .get('/shop/:id', ShopController.getShopById)
  .post('/shop', ShopController.createShop)
  .put('/shop/:id', ShopController.updateShop)
  .delete('/shop/:id', ShopController.deleteShop)

export default router
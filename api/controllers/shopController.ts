import { prisma } from "../prismaClient";
import hash from "../../globals/hash";
import { Request, Response } from "express";

export class ShopController {

  static async createShop(req: Request, res: Response) {
    try {
      const newShop = req.body;
      const createdShop = await prisma.shop.create({
        data: {
          name: newShop.name,
          email: newShop.email,
          hash: hash(newShop.password),
        },
      });
      return res.status(200).json(createdShop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateShop(req: Request, res: Response) {
    try {
      const shop = await prisma.shop.update({ where: { id: Number(req.params.id) }, data: req.body });
      return res.status(200).json(shop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getAllShops(req: Request, res: Response) {
    try {
      const shops = await prisma.shop.findMany();
      return res.status(200).json(shops);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getShopById(req: Request, res: Response) {
    try {
      const shop = await prisma.shop.findFirst({where: { id: Number(req.params.id) }});
      return res.status(200).json(shop);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteShop(req: Request, res: Response) {
    try {
      const shop = await prisma.shop.delete({where: { id: Number(req.params.id) }});
      return res.status(200).json('Shop apagado');
    } catch (e) {
      return res.status(500).json(e);
    }
  }

}
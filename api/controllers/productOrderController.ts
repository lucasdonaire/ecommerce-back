import { prisma } from "../prismaClient";
import { Request, Response } from "express";

export class ProductOrderController {

  static async createProductOrder(req: Request, res: Response) {
    try {
      const newProductOrder = req.body;
      const createdProductOrder = await prisma.productOrder.create({
        data: {
          productId: newProductOrder.productId,
          orderId: newProductOrder.orderId,
          amount: newProductOrder.amount,
        },
      });
      return res.status(200).json(createdProductOrder);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateProductOrder(req: Request, res: Response) {
    try {
      const productOrder = await prisma.productOrder.update({ where: { id: Number(req.params.id) }, data: req.body });
      return res.status(200).json(productOrder);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getAllProductOrders(req: Request, res: Response) {
    try {
      const productOrders = await prisma.productOrder.findMany();
      return res.status(200).json(productOrders);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getProductOrderById(req: Request, res: Response) {
    try {
      const productOrder = await prisma.productOrder.findFirst({where: { id: Number(req.params.id) }});
      return res.status(200).json(productOrder);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteProductOrder(req: Request, res: Response) {
    try {
      const productOrder = await prisma.productOrder.delete({where: { id: Number(req.params.id) }});
      return res.status(200).json('ProductOrder apagado');
    } catch (e) {
      return res.status(500).json(e);
    }
  }
  
}
import { prisma } from "../prismaClient";
import { Request, Response } from "express";

export class OrderController {

  static async createOrder(req: Request, res: Response) {
    try {
      const createdOrder = await prisma.order.create({
        data: { 
          clientId: Number(req.body.clientId)
        },
      });
      return res.status(200).json(createdOrder);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateOrder(req: Request, res: Response) {
    try {
      const order = await prisma.order.update({ where: { id: Number(req.params.id) }, data: req.body });
      return res.status(200).json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await prisma.order.findMany();
      return res.status(200).json(orders);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getOrderById(req: Request, res: Response) {
    try {
      const order = await prisma.order.findFirst({where: { id: Number(req.params.id) }});
      return res.status(200).json(order);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getCartByClientId(req: Request, res: Response) {
    // get most recent order that are not bought yet (cart) and delete others (are not suppose to happen.)
    // if not created, create and return empty cart
    try {
      const order = await prisma.order.findMany({where: { clientId: Number(req.params.clientId) }});
      const activeOrder = order.filter(order => !order.status).sort((a,b)=>Number(b.date)-Number(a.date))
      if(activeOrder.length >= 1){
        for(let oldOrder of activeOrder.slice(1)){
          await prisma.order.delete({where: { id: Number(oldOrder.id) }});
        }
        return res.status(200).json(activeOrder[0]);
      } else {
        const createdOrder = await prisma.order.create({ data: { clientId: Number(req.params.clientId) }});
        return res.status(200).json(createdOrder);
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteOrder(req: Request, res: Response) {
    try {
      const order = await prisma.order.delete({where: { id: Number(req.params.id) }});
      return res.status(200).json('Order apagado');
    } catch (e) {
      return res.status(500).json(e);
    }
  }


}
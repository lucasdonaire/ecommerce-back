import { prisma } from "../prismaClient";
import { Request, Response } from "express";
import imageUrlToBlob from "../../globals/imageToBlob";

export class ProductController {

  static async createProduct(req: Request, res: Response) {
    try {
      const newProduct = req.body;
      const image = newProduct?.image ? await imageUrlToBlob(newProduct.image) : ''
      const createdProduct = await prisma.product.create({
        data: { 
          name: newProduct.name,
          price: newProduct.price,
          shopId: newProduct.shopId,
          stock: newProduct.stock,
          image: image,
        },
      });
      return res.status(200).json(createdProduct);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = req.body;
      const image = updatedProduct?.image ? await imageUrlToBlob(updatedProduct.image) : ''
      updatedProduct.image = image;
      const product = await prisma.product.update({ where: { id: Number(req.params.id) }, data: updatedProduct });
      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getProductById(req: Request, res: Response) {
    try {
      const product = await prisma.product.findFirst({where: { id: Number(req.params.id) }});
      return res.status(200).json(product);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const product = await prisma.product.delete({where: { id: Number(req.params.id) }});
      return res.status(200).json('Product apagado');
    } catch (e) {
      return res.status(500).json(e);
    }
  }

}
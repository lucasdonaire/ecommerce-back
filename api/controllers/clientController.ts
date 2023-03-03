import { prisma } from "../prismaClient";
import hash from "../../globals/hash";
import { Request, Response } from "express";

export class ClientController {

  static async createClient(req: Request, res: Response) {
    try {
      const newClient = req.body;
      const createdClient = await prisma.client.create({
        data: {
          name: newClient.name,
          email: newClient.email,
          hash: hash(newClient.password),
        },
      });
      return res.status(200).json(createdClient);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateClient(req: Request, res: Response) {
    try {
      const client = await prisma.client.update({ where: { id: Number(req.params.id) }, data: req.body });
      return res.status(200).json(client);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getAllClients(req: Request, res: Response) {
    try {
      const clients = await prisma.client.findMany();
      return res.status(200).json(clients);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getClientById(req: Request, res: Response) {
    try {
      const client = await prisma.client.findUnique({where: { id: Number(req.params.id) }});
      return res.status(200).json(client);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getClientByEmail(req: Request, res: Response) {
    try {
      const client = await prisma.client.findUnique({where: { email: req.params.email }});
      if(client){
        return res.status(200).json(client);
      } else {
        return res.status(404).json()
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const hashPass = hash(req.params.password)
      const client = await prisma.client.findUnique({where: { email: req.params.email }});
      if(client){
        if(hashPass == client.hash){
          return res.status(200).json(client.id);
        } else {
          return res.status(403).json('incorrect password')
        }
      } else {
        return res.status(404).json({message:'email not found'})
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteClient(req: Request, res: Response) {
    try {
      const client = await prisma.client.delete({where: { id: Number(req.params.id) }});
      return res.status(200).json('Cliente apagado');
    } catch (e) {
      return res.status(500).json(e);
    }
  }

}
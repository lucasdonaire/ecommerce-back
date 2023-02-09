import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router();
router
  .get('/client', ClientController.getAllClients)
  .get('/client/:id', ClientController.getClientById)
  .post('/client', ClientController.createClient)
  .put('/client/:id', ClientController.updateClient)
  .delete('/client/:id', ClientController.deleteClient)

export default router
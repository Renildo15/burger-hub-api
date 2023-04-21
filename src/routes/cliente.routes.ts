import { Router } from "express";
import { CreateClienteController } from "../controllers/cliente/CreateClienteController";



const createUserController = new CreateClienteController();
const clienteRoutes = Router();

clienteRoutes.post("/",createUserController.handle);


export {clienteRoutes}
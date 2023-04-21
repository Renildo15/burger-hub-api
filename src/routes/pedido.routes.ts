import { Router } from "express";
import { CreatePedidoController } from "../controllers/pedido/CreatePedidoController";



const createPedidoController = new CreatePedidoController();


const pedidoRoutes = Router();

pedidoRoutes.post("/create", createPedidoController.handle);



export default pedidoRoutes;
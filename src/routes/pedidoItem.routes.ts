import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";


const createPedidoItemController = new CreatePedidoItemController();

const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", createPedidoItemController.handle);

export default pedidoItemRoutes
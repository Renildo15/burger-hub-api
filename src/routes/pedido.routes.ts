import { Router } from "express";
import { CreatePedidoController } from "../controllers/pedido/CreatePedidoController";
import { GetAllPedidoController } from "../controllers/pedido/GetAllPedidoController";


const createPedidoController = new CreatePedidoController();
const getAllPedidoController = new GetAllPedidoController();

const pedidoRoutes = Router();

pedidoRoutes.post("/create", createPedidoController.handle);
pedidoRoutes.get("/getall", getAllPedidoController.handle)



export default pedidoRoutes;
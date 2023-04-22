import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";
import { GetAllPedidoItensController } from "../controllers/pedidoItem/GetAllPedidoItensController";


const createPedidoItemController = new CreatePedidoItemController();
const getAllPedidoItensController = new GetAllPedidoItensController();

const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", createPedidoItemController.handle);
pedidoItemRoutes.get("/getall", getAllPedidoItensController.handle);

export default pedidoItemRoutes
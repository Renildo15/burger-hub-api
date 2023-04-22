import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";
import { GetAllPedidoItensController } from "../controllers/pedidoItem/GetAllPedidoItensController";
import { GetPedidoItemController } from "../controllers/pedidoItem/GetPedidoItemController";


const createPedidoItemController = new CreatePedidoItemController();
const getAllPedidoItensController = new GetAllPedidoItensController();
const getPedidoItemController = new GetPedidoItemController();


const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", createPedidoItemController.handle);
pedidoItemRoutes.get("/getall", getAllPedidoItensController.handle);
pedidoItemRoutes.get("/:id", getPedidoItemController.handle);

export default pedidoItemRoutes
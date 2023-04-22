import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";
import { GetAllPedidoItensController } from "../controllers/pedidoItem/GetAllPedidoItensController";
import { GetPedidoItemController } from "../controllers/pedidoItem/GetPedidoItemController";
import { DeletePedidoItemController } from "../controllers/pedidoItem/DeletePedidoItemController";

const createPedidoItemController = new CreatePedidoItemController();
const getAllPedidoItensController = new GetAllPedidoItensController();
const getPedidoItemController = new GetPedidoItemController();
const deletePedidoItemController =  new DeletePedidoItemController();

const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", createPedidoItemController.handle);
pedidoItemRoutes.get("/getall", getAllPedidoItensController.handle);
pedidoItemRoutes.get("/:id", getPedidoItemController.handle);
pedidoItemRoutes.delete("/:id", deletePedidoItemController.handle)

export default pedidoItemRoutes
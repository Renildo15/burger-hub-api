import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";
import { GetAllPedidoItensController } from "../controllers/pedidoItem/GetAllPedidoItensController";
import { GetPedidoItemController } from "../controllers/pedidoItem/GetPedidoItemController";
import { DeletePedidoItemController } from "../controllers/pedidoItem/DeletePedidoItemController";
import { UpdatePedidoItemController } from "../controllers/pedidoItem/UpdatePedidoItemController";

const createPedidoItemController = new CreatePedidoItemController();
const getAllPedidoItensController = new GetAllPedidoItensController();
const getPedidoItemController = new GetPedidoItemController();
const deletePedidoItemController =  new DeletePedidoItemController();
const updatePedidoItemController = new UpdatePedidoItemController();

const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", createPedidoItemController.handle);
pedidoItemRoutes.get("/getall", getAllPedidoItensController.handle);
pedidoItemRoutes.get("/:id", getPedidoItemController.handle);
pedidoItemRoutes.delete("/:id", deletePedidoItemController.handle);
pedidoItemRoutes.patch("/update/:id", updatePedidoItemController.handle);

export default pedidoItemRoutes
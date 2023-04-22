import { Router } from "express";
import { CreatePedidoItemController } from "../controllers/pedidoItem/CreatePedidoItemController";
import { GetAllPedidoItensController } from "../controllers/pedidoItem/GetAllPedidoItensController";
import { GetPedidoItemController } from "../controllers/pedidoItem/GetPedidoItemController";
import { DeletePedidoItemController } from "../controllers/pedidoItem/DeletePedidoItemController";
import { UpdatePedidoItemController } from "../controllers/pedidoItem/UpdatePedidoItemController";
import { AuthMiddleWare } from "../middlewares/auth.middleware";

const createPedidoItemController = new CreatePedidoItemController();
const getAllPedidoItensController = new GetAllPedidoItensController();
const getPedidoItemController = new GetPedidoItemController();
const deletePedidoItemController =  new DeletePedidoItemController();
const updatePedidoItemController = new UpdatePedidoItemController();
const authMiddleware = new AuthMiddleWare();


const pedidoItemRoutes = Router();

pedidoItemRoutes.post("/create", authMiddleware.execute, createPedidoItemController.handle);
pedidoItemRoutes.get("/getall", authMiddleware.execute, getAllPedidoItensController.handle);
pedidoItemRoutes.get("/:id",authMiddleware.execute, getPedidoItemController.handle);
pedidoItemRoutes.delete("/:id",authMiddleware.execute, deletePedidoItemController.handle);
pedidoItemRoutes.patch("/update/:id", authMiddleware.execute, updatePedidoItemController.handle);

export default pedidoItemRoutes
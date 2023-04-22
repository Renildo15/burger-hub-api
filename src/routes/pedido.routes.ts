import { Router } from "express";
import { CreatePedidoController } from "../controllers/pedido/CreatePedidoController";
import { GetAllPedidoController } from "../controllers/pedido/GetAllPedidoController";
import { GetPedidoByClienteController } from "../controllers/pedido/GetPedidoByClienteController";
import { DeletePedidoController } from "../controllers/pedido/DeletePedidoController";
import { GetPedidoController } from "../controllers/pedido/GetPedidoController";
import { UpdatePedidoController } from "../controllers/pedido/UpdatePedidoController";
import { AuthMiddleWare } from "../middlewares/auth.middleware";

const createPedidoController = new CreatePedidoController();
const getAllPedidoController = new GetAllPedidoController();
const getPedidoByClienteController = new GetPedidoByClienteController();
const deletePedidoController = new DeletePedidoController();
const getPedidoController = new GetPedidoController();
const updatePedidoController = new UpdatePedidoController();
const authMiddleware = new AuthMiddleWare();

const pedidoRoutes = Router();

pedidoRoutes.post("/create",authMiddleware.execute, createPedidoController.handle);
pedidoRoutes.get("/getall", getAllPedidoController.handle);
pedidoRoutes.get("/:username", getPedidoByClienteController.handle);
pedidoRoutes.delete("/:username/:id", authMiddleware.execute,  deletePedidoController.handle);
pedidoRoutes.get("/pedido/:id",getPedidoController.handle);
pedidoRoutes.patch("/update/:id", authMiddleware.execute, updatePedidoController.handle);



export default pedidoRoutes;
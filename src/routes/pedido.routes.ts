import { Router } from "express";
import { CreatePedidoController } from "../controllers/pedido/CreatePedidoController";
import { GetAllPedidoController } from "../controllers/pedido/GetAllPedidoController";
import { GetPedidoByClienteController } from "../controllers/pedido/GetPedidoByClienteController";
import { DeletePedidoController } from "../controllers/pedido/DeletePedidoController";

const createPedidoController = new CreatePedidoController();
const getAllPedidoController = new GetAllPedidoController();
const getPedidoByClienteController = new GetPedidoByClienteController();
const deletePedidoController = new DeletePedidoController();

const pedidoRoutes = Router();

pedidoRoutes.post("/create", createPedidoController.handle);
pedidoRoutes.get("/getall", getAllPedidoController.handle);
pedidoRoutes.get("/:username", getPedidoByClienteController.handle);
pedidoRoutes.delete("/:username/:id", deletePedidoController.handle);



export default pedidoRoutes;
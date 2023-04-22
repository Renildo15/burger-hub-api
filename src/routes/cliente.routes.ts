import { Router } from "express";
import { CreateClienteController} from "../controllers/cliente/CreateClienteController";
import { GetAllClientesController } from "../controllers/cliente/GetAllClienteController";
import { GetClienteController } from "../controllers/cliente/GetClienteController";
import { DeleteClienteController } from "../controllers/cliente/DeleteClienteController";
import { UpdateClienteController } from "../controllers/cliente/UpdateClienteController";
import { AuthMiddleWare } from "../middlewares/auth.middleware";


const createClienteController = new CreateClienteController();
const getAllClienteController = new GetAllClientesController();
const getClienteController = new GetClienteController();
const deleteClienteController = new DeleteClienteController();
const updateClienteController = new UpdateClienteController();
const authMiddleware = new AuthMiddleWare();

const clienteRoutes = Router();

clienteRoutes.post("/create",createClienteController.handle);
clienteRoutes.get("/getall",  getAllClienteController.handle);
clienteRoutes.get("/:username", getClienteController.handle);
clienteRoutes.delete("/:username", authMiddleware.execute, deleteClienteController.handle);
clienteRoutes.patch("/:username", authMiddleware.execute, updateClienteController.handle);

export default clienteRoutes
import { Router } from "express";
import { CreateClienteController} from "../controllers/cliente/CreateClienteController";
import { GetAllClientesController } from "../controllers/cliente/GetAllClienteController";




const createClienteController = new CreateClienteController();
const getALlClienteController = new GetAllClientesController();

const clienteRoutes = Router();

clienteRoutes.post("/",createClienteController.handle);
clienteRoutes.get("/", getALlClienteController.handle);


export default clienteRoutes
import { Router } from "express";
import { CreateItemController } from "../controllers/item/CreateItemController";
import { GetAllItensController } from "../controllers/item/GetAllItensController";

const createItemController = new CreateItemController();
const grtAllItensController = new GetAllItensController();

const itemRoutes = Router();


itemRoutes.post("/create", createItemController.handle);
itemRoutes.get("/getall", grtAllItensController.handle);

export default itemRoutes;
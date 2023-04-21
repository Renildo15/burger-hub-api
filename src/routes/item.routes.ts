import { Router } from "express";
import { CreateItemController } from "../controllers/item/CreateItemController";


const createItemController = new CreateItemController();

const itemRoutes = Router();


itemRoutes.post("/create", createItemController.handle);

export default itemRoutes;
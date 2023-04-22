import { Router } from "express";
import { CreateItemController } from "../controllers/item/CreateItemController";
import { GetAllItensController } from "../controllers/item/GetAllItensController";
import { GetItemController } from "../controllers/item/GetItemController";
import { DeleteItemController } from "../controllers/item/DeleteItemController";

const createItemController = new CreateItemController();
const getAllItensController = new GetAllItensController();
const getItemController = new GetItemController();
const deleteItemController = new DeleteItemController();

const itemRoutes = Router();


itemRoutes.post("/create", createItemController.handle);
itemRoutes.get("/getall", getAllItensController.handle);
itemRoutes.get("/:nome", getItemController.handle);
itemRoutes.delete("/:nome", deleteItemController.handle);

export default itemRoutes;
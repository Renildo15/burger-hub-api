import { Router } from "express";
import { CreateItemController } from "../controllers/item/CreateItemController";
import { GetAllItensController } from "../controllers/item/GetAllItensController";
import { GetItemController } from "../controllers/item/GetItemController";
import { DeleteItemController } from "../controllers/item/DeleteItemController";
import { UpdateItemController } from "../controllers/item/UpdateItemController";
import { AuthMiddleWare } from "../middlewares/auth.middleware";


const createItemController = new CreateItemController();
const getAllItensController = new GetAllItensController();
const getItemController = new GetItemController();
const deleteItemController = new DeleteItemController();
const updateItemController = new UpdateItemController();
const authMiddleware = new AuthMiddleWare();

const itemRoutes = Router();


itemRoutes.post("/create", authMiddleware.execute, createItemController.handle);
itemRoutes.get("/getall", getAllItensController.handle);
itemRoutes.get("/:nome", getItemController.handle);
itemRoutes.delete("/:nome", authMiddleware.execute, deleteItemController.handle);
itemRoutes.patch("/update/:nome", authMiddleware.execute, updateItemController.handle)

export default itemRoutes;
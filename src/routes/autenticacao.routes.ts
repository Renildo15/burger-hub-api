import { Router } from "express";
import { AuthController } from "../controllers/autenticacao/AuthController";


const authController = new AuthController();

const authRoutes = Router();

authRoutes.post("/login", authController.handle);

export default authRoutes;
import { Router } from "express";
import authRoutes from "./autenticacao.routes";
import itemRoutes from "./item.routes";
import clienteRoutes from "./cliente.routes";
import pedidoItemRoutes from "./pedidoItem.routes";
import pedidoRoutes from "./pedido.routes";


export const routes = Router();

routes.use("/clientes", clienteRoutes);
routes.use("/pedidos", pedidoRoutes);
routes.use("/itens", itemRoutes);
routes.use("/pedidos_itens", pedidoItemRoutes);
routes.use("/auth", authRoutes);


import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors"
import clienteRoutes from "./routes/cliente.routes";
import pedidoRoutes from "./routes/pedido.routes";
import itemRoutes from "./routes/item.routes";
import { AppError } from "./errors/AppError";

const app = express()
const PORT = 3000

app.use(express.json());
app.use("/clientes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/itens", itemRoutes);
app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message: error.message
        })
    }

    return response.status(500).json({
        status:"error",
        message: `Internal server error - ${error.message}`
    })
})

app.use(cors());

app.listen(PORT, ()=>{
    console.log("Running")
})

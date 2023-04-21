import { Request, Response } from "express";
import { CreatePedidoUseCase } from "../../modules/clientes/useCases/createPedido/CreatePedidoUseCase";


export class CreatePedidoController{
    async handle(req: Request, res: Response){
        const {cliente_username, total, status} = req.body;
        const createPedidoUseCase = new CreatePedidoUseCase();

        try {
            const newPedido = await createPedidoUseCase.execute({cliente_username, total, status});

            return res.status(201).json({
                success: "Order created successfully",
                newPedido
            })
        } catch (error) {
            return res.status(400).json({ error: error});
        }
    }
}
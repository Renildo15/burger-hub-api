import { Request, Response } from "express";
import { GetAllPedidoUseCase } from "../../modules/pedidos/createPedido/GetAllPedidosUseCase";


export class GetAllPedidoController{
    async handle(req: Request, res: Response){
        try {
            const getAllPedidoUseCase = new GetAllPedidoUseCase();

            const pedidos = await getAllPedidoUseCase.execute();

            if(pedidos.length === 0){
                return res.status(404).json({
                    message: "There are no Pedidos listed."
                });
            }

            return res.status(200).json({
                pedidos
            })
        } catch (error) {
            return res.status(400).send({error: "Pedidos search failure"});
        }
    }
}
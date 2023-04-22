import { Request, Response } from "express";
import { GetAllPedidoItensUseCase } from "../../modules/pedidoItem/useCases/GetAllPedidoItensUseCase";



export class GetAllPedidoItensController{
    async handle(req: Request, res: Response){
        try {
            const getAllPedidoItensUseCase = new GetAllPedidoItensUseCase();

            const pedidoItens = await getAllPedidoItensUseCase.execute();

            if(pedidoItens.length === 0){
                return res.status(404).json({
                    message: "There are no PedidoItem listed."
                })
            }

            return res.status(200).json({
                pedidoItens
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
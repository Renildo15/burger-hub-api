import { Request, Response } from "express";
import { GetPedidoItemUseCase } from "../../modules/pedidoItem/useCases/GetPedidoItemUseCase";



export class GetPedidoItemController{
    async handle(req: Request, res: Response){
        const {id} = req.params;

        try {
            const getPedidoItemUseCase = new GetPedidoItemUseCase();

            const pedidoItem = await getPedidoItemUseCase.execute(id);

            if(pedidoItem === null){
                return res.status(404).json({
                    message: "PedidoItem not found"
                });
            }

            return res.status(200).json({
                pedidoItem
            })
        } catch (error: Error | any) {
            return res.status(400).json({error: error.message})
        }
    }
}
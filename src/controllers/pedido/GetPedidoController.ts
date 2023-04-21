import { Request, Response } from "express";
import { GetPedidoUseCase } from "../../modules/pedidos/createPedido/GetPedidoUseCase";


export class GetPedidoController{
    async handle(req: Request, res: Response){
        const {id} = req.params;

        try {
            const getPedidoUseCase = new GetPedidoUseCase();

            const pedido = await getPedidoUseCase.execute(id);

            if(pedido === null){
                return res.status(404).json({
                    message: "Pedido not found"
                });
            }

            return res.status(200).json({pedido})
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
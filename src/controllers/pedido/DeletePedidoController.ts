import { Request, Response } from "express";
import { DeletePedidoUseCase } from "../../modules/pedidos/createPedido/DeletePedidoUseCase";


export class DeletePedidoController {
    
    async handle(req: Request, res: Response) {
        const { username, id } = req.params;
        try {
            const deletePedidoUseCase = new DeletePedidoUseCase();
            const pedido = await deletePedidoUseCase.execute(username, id);

            return res.status(200).json({
                message: "Pedido deleted successfully",
                pedido,
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}

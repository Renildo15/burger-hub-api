import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { UpdatePedidoItemUseCase } from "../../modules/pedidoItem/useCases/UpdatePedidoItemUseCase";

export class UpdatePedidoItemController{
    async handle(req: Request, res: Response){
        const {id} = req.params;
        const {pedido_id, item_id, valor} = req.body;

        try {
            const pedidoItem = await prisma.pedidoItem.findUnique({
                where:{
                    id: id
                }
            });

            if(pedidoItem === null){
                return res.status(404).json({
                    message: "PedidoItem not found"
                })
            }

            const updatePedidoItem = new UpdatePedidoItemUseCase();
            const updatedPedidoItem = await updatePedidoItem.execute({id, pedido_id, item_id, valor});

            return res.status(201).json({
                success: "PedidoItem updated",
                updatedPedidoItem
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
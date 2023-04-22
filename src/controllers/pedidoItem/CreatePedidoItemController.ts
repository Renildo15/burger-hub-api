import { Request, Response } from "express";
import { CreatePedidoItemUseCase } from "../../modules/pedidoItem/useCases/CreatePedidoItemUseCase";
import { prisma } from "../../prisma/client";



export class CreatePedidoItemController{
    async handle(req: Request, res: Response){
        const {pedido_id, item_id, valor} = req.body;

        try {

            const pedido = await prisma.pedido.findUnique({
                where:{
                    id: pedido_id
                }
            });

            const item = await prisma.item.findUnique({
                where:{
                    id: item_id
                }
            })

            if(pedido === null || item === null){
                return res.status(404).json({
                    message: "Pedido not found or Item not found"
                })
            }
            const createPedidoItemUseCase = new CreatePedidoItemUseCase();

            const pedidoItem = await createPedidoItemUseCase.execute({pedido_id, item_id, valor});

            return res.status(201).json({
                success: "PedidoItem created successfully",
                pedidoItem: pedidoItem
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
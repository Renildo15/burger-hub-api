import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { UpdatePedidoUseCase } from "../../modules/pedidos/createPedido/UpdatePedidoUseCase";


export class UpdatePedidoController{
    async handle(req: Request, res:Response){
        const {id} = req.params;
        const {total, status, cliente_username} = req.body;

        try {
            const pedido = await prisma.pedido.findUnique({
                where:{
                    id: id
                }
            });

            if(pedido === null){
                return res.status(404).json({
                    message: "Pedido not found"
                });
            }

            const updatePedido = new UpdatePedidoUseCase();

            const updatedPedido = await updatePedido.execute({id, total, status, cliente_username})

            return res.status(201).json({
                success: "Pedido updated",
                pedido: updatedPedido
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
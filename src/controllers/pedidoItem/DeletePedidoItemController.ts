import { Request, Response } from "express";
import { DeletePedidoItemUseCase } from "../../modules/pedidoItem/useCases/DeletePedidoItemUseCase";
import { prisma } from "../../prisma/client";


export class DeletePedidoItemController{
    async handle(req: Request, res: Response){
        const {id} = req.params;

        try {

            const pedidoItem = await prisma.pedidoItem.findUnique({
                where:{
                    id: id
                }
            })

            if(pedidoItem === null){
                return res.status(400).json({
                    message: "PedidoItem not found"
                })
            };

            const deletePedidoItem = new DeletePedidoItemUseCase();
            const deletedPedidoItem = await deletePedidoItem.execute(id);

            
            return res.status(200).json({
                success: "PedidoItem deleted successfully",
                deletedPedidoItem,
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
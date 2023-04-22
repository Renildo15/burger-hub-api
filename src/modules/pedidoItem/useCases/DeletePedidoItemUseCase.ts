import { PedidoItem } from "@prisma/client";
import { prisma } from "../../../prisma/client";


export class DeletePedidoItemUseCase{
    async execute(id: string): Promise<PedidoItem>{
        const pedidoItem = await prisma.pedidoItem.delete({
            where:{
                id: id
            }
        });

        return pedidoItem;
    }
}
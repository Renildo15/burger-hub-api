import { PedidoItem } from "@prisma/client";
import { prisma } from "../../../prisma/client";


export class GetPedidoItemUseCase{
    async execute(id: string): Promise<PedidoItem | null>{
        const pedidoItem = await prisma.pedidoItem.findUnique({
            where:{
                id: id,
            }
        });

        return pedidoItem;
    }
}
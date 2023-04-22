import { PedidoItem } from "@prisma/client";
import { CreatePedidoItemDTO } from "../dtos/CreatePedidoItemDTO";
import { prisma } from "../../../prisma/client";


export class UpdatePedidoItemUseCase{
    async execute({id, pedido_id, item_id, valor}: CreatePedidoItemDTO): Promise<PedidoItem>{
        const pedidoItem = await prisma.pedidoItem.update({
            where:{
                id: id
            },
            data:{
                pedido_id,
                item_id,
                valor
            }
        });

        return pedidoItem;
    }
}
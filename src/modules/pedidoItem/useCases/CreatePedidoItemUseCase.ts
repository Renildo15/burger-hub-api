import { PedidoItem } from "@prisma/client";
import { CreatePedidoItemDTO } from "../dtos/CreatePedidoItemDTO";
import { prisma } from "../../../prisma/client";


export class CreatePedidoItemUseCase{
    async execute({pedido_id, item_id, valor}: CreatePedidoItemDTO): Promise<PedidoItem>{

        const pedidoItem = await prisma.pedidoItem.create({
            data:{
                pedido_id,
                item_id,
                valor
            }
        });

        return pedidoItem;
    }
}
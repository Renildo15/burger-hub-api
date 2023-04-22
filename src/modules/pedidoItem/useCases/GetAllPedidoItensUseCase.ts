import { PedidoItem } from "@prisma/client";
import { prisma } from "../../../prisma/client";



export class GetAllPedidoItensUseCase{
    async execute(): Promise<PedidoItem[]>{
        const pedidoItens = await prisma.pedidoItem.findMany();

        return pedidoItens;
    }
}
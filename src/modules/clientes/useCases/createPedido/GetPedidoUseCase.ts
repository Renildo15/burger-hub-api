import { Pedido } from "@prisma/client";
import { prisma } from "../../../../prisma/client";


export class GetPedidoUseCase{
    async execute(id: string): Promise<Pedido | null>{
        const pedido = await prisma.pedido.findUnique({
            where:{
                id: id
            }
        });

        return pedido;
    }
}
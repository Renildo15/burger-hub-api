import { Pedido } from "@prisma/client";
import { prisma } from "../../../../prisma/client";


export class GetPedidoByClienteUseCase{
    async execute(cliente_username:string): Promise<Pedido[]>{
        return await prisma.pedido.findMany({
            where:{
                cliente:{
                    username: cliente_username
                }
            }
        });
    }
}
import { Pedido } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";



export class DeletePedidoUseCase{
    async execute(cliente_username: string,id: string): Promise<Pedido>{

        const cliente = await prisma.cliente.findUnique({
            where:{
                username: cliente_username
            }
        })

        if(cliente === null){
            throw new AppError("Cliente not found");
        }
        const pedido = await prisma.pedido.delete({
            where:{
                id: id
            }
        });

        return pedido;
    }
}
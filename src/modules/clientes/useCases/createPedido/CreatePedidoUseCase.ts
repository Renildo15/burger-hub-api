import { Pedido } from "@prisma/client";
import { CreatePedidoDTO } from "../../dtos/CreatePedidoDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";


export class CreatePedidoUseCase{
    async execute({cliente_username, total, status}: CreatePedidoDTO): Promise<Pedido>{
        const cliente = await prisma.cliente.findUnique({
            where:{
                username: cliente_username,
            },
        });


        if(cliente === null){
            throw new AppError("Cliente not found!"); 
        }

        const newPedido = await prisma.pedido.create({
            data:{
                total:total,
                status:status,
                cliente:{
                    connect:{
                        username: cliente_username
                    }
                }
            }
        })

        return newPedido;
        
    }
}
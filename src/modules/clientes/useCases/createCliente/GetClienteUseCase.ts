import { Cliente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";


export class GetClienteUseCase{
    async execute(username: string): Promise<Cliente | null>{
        const cliente = await prisma.cliente.findUnique({
            where:{
                username: username
            }
        });

        return cliente
    }
}
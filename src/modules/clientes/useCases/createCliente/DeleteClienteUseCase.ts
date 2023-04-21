import { Cliente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class DeleteClienteUseCase{
    async execute(username: string): Promise<Cliente>{
        const cliente = await prisma.cliente.delete({
            where:{
                username: username
            }
        });

        return cliente;
    }
}
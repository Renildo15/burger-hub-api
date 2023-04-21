import { Cliente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllClientesUseCase{
    async execute(): Promise<Cliente[]>{
        return await prisma.cliente.findMany();
    }
}
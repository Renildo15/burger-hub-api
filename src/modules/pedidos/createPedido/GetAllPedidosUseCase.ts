import { Pedido } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetAllPedidoUseCase{
    async execute(): Promise<Pedido[]>{
        return await prisma.pedido.findMany();
    }
}
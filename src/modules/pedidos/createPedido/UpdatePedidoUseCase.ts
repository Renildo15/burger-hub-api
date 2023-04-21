import { Pedido } from "@prisma/client";
import { CreatePedidoDTO } from "../dtos/CreatePedidoDTO";
import { prisma } from "../../../prisma/client";

export class UpdatePedidoUseCase {
    async execute({ id, total, status, cliente_username }: CreatePedidoDTO): Promise<Pedido> {
        const pedido = await prisma.pedido.update({
            where: {
                id: id 
            },
            data: {
                total,
                status,
                cliente_username
            }
        });

        return pedido;
    }
}

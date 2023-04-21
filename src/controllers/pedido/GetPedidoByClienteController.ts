import { Request, Response } from "express";
import { GetPedidoByClienteUseCase } from "../../modules/clientes/useCases/createPedido/GetPedidoByClienteUseCase";
import { prisma } from "../../prisma/client";


export class GetPedidoByClienteController{
    async handle(req: Request, res: Response){
        const {username} = req.params;
        try {
            const getPedidoByCliente = new GetPedidoByClienteUseCase()

            const cliente = await prisma.cliente.findUnique({
                where:{
                username:username
                }
            })
            if(cliente === null){
                return res.status(404).json({
                    message: "Cliente not found"
                })
            }

            const pedidosCliente = await getPedidoByCliente.execute(username);

            if(pedidosCliente === null){
                return res.status(404).json({
                    message: "There are no Pedidos listed."
                });
            }

            return res.status(200).json(pedidosCliente)
        } catch (error) {
            return res.status(400).send({error: "Pedido search failed"});
        }
    }
}
import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { UpdateClienteUseCase } from "../../modules/clientes/useCases/createCliente/UpdateClienteUseCase";



export class UpdateClienteController{
    async handle(req: Request, res: Response){
        const {username} = req.params;
        const {nome, email, password, telefone, endereco} = req.body;

        try {
            const cliente = await prisma.cliente.findUnique({
                where:{
                    username:username
                }
            });

            if(cliente === null){
                return res.status(404).json({
                    message: "Cliente not found"
                });
            }

            const updateCliente = new UpdateClienteUseCase();

            const updatedCliente = await updateCliente.execute({nome, email, username, password, telefone, endereco});

            return res.status(200).json({
                success: "Cliente updated",
                updatedCliente: updatedCliente
            })
        } catch (error) {
            return res.status(400).send({error: "Client update failed"});
        }
    }
}
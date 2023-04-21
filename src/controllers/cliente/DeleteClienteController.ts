import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { DeleteClienteUseCase } from "../../modules/clientes/useCases/createCliente/DeleteClienteUseCase";


export class DeleteClienteController{
    async handle(req: Request, res: Response){
        try {
            const { username } = req.params

            const cliente = await prisma.cliente.findUnique({
                where:{
                    username: username
                }
            });

            if(cliente === null){
                return res.status(404).json({
                    message: "Cliente not found"
                });
            }

            const deleteCliente = new DeleteClienteUseCase();

            const deletedCliente = await deleteCliente.execute(username);

            return res.status(200).json({
                success: "Cliente deleted!",
                deletedCliente,
            });
        } catch (error) {
            return res.status(400).send({error: "Client deletion failed"});
        }
    }
}
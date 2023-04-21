import { Request, Response } from "express";
import { GetClienteUseCase } from "../../modules/clientes/useCases/createCliente/GetClienteUseCase";


export class GetClienteController{
    async handle(req: Request, res: Response){
        try {
            const {username} = req.params

            const getCliente = new GetClienteUseCase();

            const cliente = await getCliente.execute(username);
            console.log(cliente)
            if(cliente === null){
                return res.status(404).json({
                    message: "Cliente not found"
                })
            }

            return res.status(200).json({
                cliente
            });

        } catch (error) {
            return res.status(400).send({error: "Customer search failed"});
        }
    }
}
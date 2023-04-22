import { Request, Response } from "express";
import { GetAllClientesUseCase } from "../../modules/clientes/useCases/createCliente/GetAllClientesUseCase";



export class GetAllClientesController{
    async handle(req: Request, res: Response){
        try {
            const getAllClienteController = new GetAllClientesUseCase();

            const result = await getAllClienteController.execute();

            if(result.length === 0){
                return res.status(404).json({
                    message: "There are no Clientes listed."
                });
            }

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).send({error: "Customer search failure"});
        }
    }
}
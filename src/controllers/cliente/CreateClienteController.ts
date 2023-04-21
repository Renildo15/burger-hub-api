import { Request, Response } from "express";
import { CreateClienteUseCase } from "../../modules/clientes/useCases/createCliente/CreateClienteUseCase";

export class CreateClienteController{
    async handle(req: Request, res: Response){
        const {nome, email, telefone, endereco} = req.body

        const createClienteUseCase = new CreateClienteUseCase();

        const result = await createClienteUseCase.execute({nome, email, telefone, endereco});

        return res.status(201).json(result);
    }
}
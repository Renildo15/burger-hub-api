import { Request, Response } from "express";
import { CreateClienteUseCase } from "../../modules/clientes/useCases/createCliente/CreateClienteUseCase";
import bcrypt from 'bcrypt';

export class CreateClienteController{
    async handle(req: Request, res: Response){
        const {nome, email, username, password, telefone, endereco} = req.body

        const passwordHash = await bcrypt.hash(password, 10);

        const createClienteUseCase = new CreateClienteUseCase();

        const result = await createClienteUseCase.execute({nome, email, username, password: passwordHash, telefone, endereco});

        return res.status(201).json(result);
    }
}
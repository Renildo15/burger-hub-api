import { Request, Response } from "express";
import { GetAllClientesUseCase } from "../../modules/clientes/useCases/createCliente/GetAllClientesUseCase";



export class GetAllClientesController {
    async handle(req: Request, res: Response) {
        const getAllClienteUseCase = new GetAllClientesUseCase();

        const result = await getAllClienteUseCase.execute();
        console.log(result)
        return res.status(200).json(result);
    }
}
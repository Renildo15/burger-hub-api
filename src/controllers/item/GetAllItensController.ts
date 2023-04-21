import { Request, Response } from "express";
import { GetAllItensUseCase } from "../../modules/item/useCases/GetAllItensUseCase";

export class GetAllItensController{
    async handle(req: Request, res: Response){
        try {
            const getAllItensUseCase = new GetAllItensUseCase();

            const itens = await getAllItensUseCase.execute();

            if(itens === null){
                return res.status(404).json({
                    message: "There are no Item listed."
                });
            }

            return res.status(200).json({
                itens
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
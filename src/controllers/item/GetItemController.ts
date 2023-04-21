import { Request, Response } from "express";
import { GetItemUseCase } from "../../modules/item/useCases/GetItemUseCase";


export class GetItemController{
    async handle(req: Request, res: Response){
        const {nome} = req.params;

        try {
            const getItemUseCase = new GetItemUseCase();

            const item = await getItemUseCase.execute(nome);

            if(item === null){
                return res.status(404).json({
                    message: "Item not found"
                });
            }

            return res.status(200).json({item})
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
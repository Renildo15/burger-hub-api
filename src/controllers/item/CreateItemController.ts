import { Request, Response } from "express";
import { CreateItemUseCase } from "../../modules/item/useCases/CreateItemUseCase";


export class CreateItemController{
    async handle(req: Request, res: Response){
        const {nome, descricao, preco} = req.body

        try {
            const createItemUseCase = new CreateItemUseCase();
            const item = await createItemUseCase.execute({nome, descricao, preco});

            return res.status(201).json({
                success: "Item created successfully",
                item
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
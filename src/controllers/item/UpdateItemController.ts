import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { UpdateItemUseCase } from "../../modules/item/useCases/UpdateItemUseCase";


export class UpdateItemController{
    async handle(req: Request, res: Response){
        const {nome} = req.params;
        const {descricao, preco} = req.body;

        try {
            const item = await prisma.item.findUnique({
                where:{
                    nome:nome
                }
            });

            if(item === null){
                return res.status(404).json({
                    message: "Item not found"
                });
            }

            const updateItem = new UpdateItemUseCase();
            const updatedItem = await updateItem.execute({nome, descricao, preco});

            return res.status(200).json({
                success: "Item updated",
                item: updatedItem
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
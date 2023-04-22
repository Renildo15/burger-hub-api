import { Request, Response } from "express";
import { DeleteItemUseCase } from "../../modules/item/useCases/DeleteItemUseCase";
import { prisma } from "../../prisma/client";

export class DeleteItemController{
    async handle(req: Request, res: Response){
        const {nome} = req.params;

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
            const deleteItem = new DeleteItemUseCase();
            const deletedItem = await deleteItem.execute(nome);


            return res.status(200).json({
                message: "Item deleted successfully",
                deletedItem
            })
        } catch (error: Error | any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
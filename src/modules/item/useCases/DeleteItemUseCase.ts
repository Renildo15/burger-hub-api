import { Item } from "@prisma/client";
import { prisma } from "../../../prisma/client";


export class DeleteItemUseCase{
    async execute(nome: string): Promise<Item>{
        const item = await prisma.item.delete({
            where:{
                nome:nome
            }
        });

        return item;
    }
}
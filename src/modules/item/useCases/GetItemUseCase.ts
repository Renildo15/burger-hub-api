import { Item } from "@prisma/client";
import { prisma } from "../../../prisma/client";



export class GetItemUseCase{
    async execute(nome: string): Promise<Item | null>{
        const item = await prisma.item.findUnique({
            where:{
                nome: nome
            }
        });

        return item;
    }
}
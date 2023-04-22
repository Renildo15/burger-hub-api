import { Item } from "@prisma/client";
import { CreateItemDTO } from "../dtos/CreateItemDTO";
import { prisma } from "../../../prisma/client";


export class UpdateItemUseCase{
    async execute({nome, descricao, preco}: CreateItemDTO): Promise<Item>{
        const item = await prisma.item.update({
            where:{
                nome: nome
            },
            data:{
                nome,
                descricao,
                preco
            }
        });

        return item;
    }
}
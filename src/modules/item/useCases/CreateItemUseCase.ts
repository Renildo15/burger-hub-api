import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateItemDTO } from "../dtos/CreateItemDTO";
import { Item } from "@prisma/client";


export class CreateItemUseCase{
    async execute({nome, descricao, preco}: CreateItemDTO): Promise<Item>{
        const itemAlreadyExists = await prisma.item.findUnique({
            where: {
                nome: nome 
            }
        });

        if(itemAlreadyExists){
            throw new AppError("Item already exists!");
        }

        const item = await prisma.item.create({
            data:{
                nome,
                descricao,
                preco
            }
        });

        return item;
    }

}
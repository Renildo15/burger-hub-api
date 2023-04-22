import { Item } from "@prisma/client";
import { prisma } from "../../../prisma/client";


export class GetAllItensUseCase{
    async execute(): Promise<Item[]>{
        return await prisma.item.findMany();
    }
}
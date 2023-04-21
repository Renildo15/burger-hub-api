import { prisma } from "../../../../prisma/client";
import { Cliente } from "@prisma/client";
import { CreateClienteDTO } from "../../dtos/CreateClienteDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateClienteUseCase{
    //verificar se o cliente já existe
    async execute({nome, email, telefone, endereco}: CreateClienteDTO): Promise<Cliente>{
        const clienteAlreadyExists = await prisma.cliente.findUnique({
            where:{
                email,
            }
        });

        if(clienteAlreadyExists){
            throw new AppError("Cliente already exists!");
        }
        const cliente = await prisma.cliente.create({
            data:{
                nome,
                email,
                telefone,
                endereco
            }
        });

        return cliente;
    }
}
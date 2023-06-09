import { prisma } from "../../../../prisma/client";
import { Cliente } from "@prisma/client";
import { CreateClienteDTO } from "../../dtos/CreateClienteDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateClienteUseCase{
    //verificar se o cliente já existe
    async execute({nome, email, username, password, telefone, endereco}: CreateClienteDTO): Promise<Cliente>{
        const clienteAlreadyExists = await prisma.cliente.findUnique({
            where:{
                username,
            }
        });

        if(clienteAlreadyExists){
            throw new AppError("Cliente already exists!");
        }
        const cliente = await prisma.cliente.create({
            data:{
                nome,
                email,
                username,
                password,
                telefone,
                endereco
            }
        });

        return cliente;
    }
}
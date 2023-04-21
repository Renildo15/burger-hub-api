import { prisma } from "../../../../prisma/client";
import { CreateClienteDTO } from "../../dtos/CreateClienteDTO";
import { Cliente } from "@prisma/client";

export class UpdateClienteUseCase{
    async execute({nome, email, username, password, telefone, endereco}:CreateClienteDTO): Promise<Cliente>{
        const updateCliente = await prisma.cliente.update({
            where:{
                username:username
            },
            data:{
                nome,
                email,
                username,
                password,
                telefone,
                endereco
            }
        });

        return updateCliente;
    }
}
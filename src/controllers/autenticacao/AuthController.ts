import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import bcrypt from 'bcrypt';
import { GenerateToken } from "../../services/auth.service";

export class AuthController{
    async handle(req: Request, res: Response){
        const {username, password} = req.body;

        try {
            const cliente = await prisma.cliente.findUnique({
                where:{
                    username: username
                }
            });

            if(cliente === null){
                return res.status(404).json({
                    message: "Client does not exist"
                })
            }

            const passwordIsValid = await bcrypt.compare(password, cliente.password)

            if(!passwordIsValid){
                return res.status(400).json({
                    error: "Password not found"
                })
            }

            const generate = new GenerateToken();

            const token = await generate.execute(username);

            return res.status(200).json({
                token,
                cliente
            })
        } catch (error: Error | any) {
            return res.status(400).json({error: error.message})
        }
    }
}
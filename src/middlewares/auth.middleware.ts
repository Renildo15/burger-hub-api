import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
const authConfig = require("../config/auth");
export class AuthMiddleWare{
    async execute(req: Request, res: Response, next: NextFunction){
        try {
            const { authorization } = req.headers;

            if(!authorization){
                return res.status(401).send({error: "Authorization token not provided"})
            }

            const parts = authorization.split(" ");

            if(parts.length !== 2 ){
                return res.status(401).send({error: "Authentication error. Check token format"});
            }

            const [schema, token] = parts;

            if(schema !== "Bearer"){
                return res.status(401).send({error: "Authentication error. Check token format"})
            }

            jwt.verify(token, authConfig.secret_jwt, (error: any, decoded:any)=>{
                if(error){
                    return res.status(401).send({ message: "Token invalid!" });
                }

                req.body.username = decoded.username
            });

            return next();
        } catch (error: Error | any) {
            return res.status(500).send(error.message); 
        }
    }
}
import jwt from "jsonwebtoken";

export class GenerateToken{
    async execute(username: string): Promise<string>{
        return jwt.sign({username:username},"03239ae2504fbbeb822bde81bf813cde", {
            expiresIn: 86400,
        });
    }
}
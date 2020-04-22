import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { LikeUserUC } from "../../../business/usecase/users/LikeUser";
import { LikeUserDB } from "../../../data/likeUserDataBase";

export const LikeUserEndPoint = async (req: Request, res: Response) => {
    try {
        const likeUserUC = new LikeUserUC(new LikeUserDB())
        const token = req.headers.auth as string
        const jwtSecretKey: string = "chave"
        const jwtData = jwt.verify(token,jwtSecretKey) as {userId: string}
        
        await likeUserUC.execute({
            userId:jwtData.userId,
            likeId: req.body.likeId
        })
        
        const msg = "User followed"
        res.status(200).send(msg);
    } catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}

//token: ravier@ravier.com "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWJhZDRlNy0zMDNjLTQ3ZWUtYTM1MS03OWY0OWZiN2Q2ODYiLCJpYXQiOjE1ODU2OTM2MjMsImV4cCI6MTU4NTY5NzIyM30.1E8X6YLYwT2W1SVrG3R5uD7ERVQj8smkIzXrtcdBCWE"
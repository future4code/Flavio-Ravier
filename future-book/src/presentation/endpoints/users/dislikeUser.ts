import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { DislikeUserUC } from "../../../business/usecase/users/dislikeUser";
import { LikeUserDB } from "../../../data/likeUserDataBase";

export const DislikeUserEndPoint = async (req: Request, res: Response) => {
    try {
        const dislikeUserUC = new DislikeUserUC(new LikeUserDB())
        const token = req.headers.auth as string
        const jwtSecretKey: string = "chave"
        const jwtData = jwt.verify(token,jwtSecretKey) as {userId: string}
        
        await dislikeUserUC.execute({
            userId:jwtData.userId,
            dislikeId: req.body.dislikeId
        })
        
        const msg = "User unfollowed"
        res.status(200).send(msg);
    } catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}

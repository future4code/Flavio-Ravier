import { Request, Response } from "express";
import { LoginUC } from "../../../business/usecase/users/login";
import { UserDB } from "../../../data/userDataBase";

export const LoginEndPoint = async (req: Request, res: Response) => {
    try {
        const createUserUC = new LoginUC(new UserDB());
        const result = await createUserUC.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result);
    } catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
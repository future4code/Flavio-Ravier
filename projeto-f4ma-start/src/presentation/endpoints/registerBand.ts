import { Request, Response, response } from "express";
import { RegisterBandUC } from "../../business/usercases/registerBand";
import { BandDatabase } from "../../data/bandDatabase";

export const RegisterBandEndPoint = async (req: Request, res: Response) => {
    try {
        const registerBandUC = new RegisterBandUC(new BandDatabase())
        const  result = await registerBandUC.execute({
            name: req.body.name,
            genre: req.body.genre,
            responsible: req.body.responsible
        })

        res.status(200).send(result);
    } catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
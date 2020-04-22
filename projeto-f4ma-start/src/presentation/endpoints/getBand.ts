import { Request, Response } from "express";
import { BandDatabase } from "../../data/bandDatabase"
import { GetBandUC } from "../../business/usercases/getBand";

export const GetBandEndpoint = async(req: Request, res: Response ) => {
    try {
        const getBandUC = new GetBandUC(new BandDatabase());
        const result = await getBandUC.execute({
            name:req.body.name, 
            id:req.body.id
        })
        res.status(200).send(result)
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
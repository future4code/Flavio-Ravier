import { v4 } from "uuid";
import * as bcrypt from "bcrypt";
import { Band } from "../entities/band";
import { BandGateway } from "../gateways/band"

export class RegisterBandUC {
    constructor(private bandGateway: BandGateway){}
    public async execute(input:RegisterBandInputUC): Promise<RegisterBandOutputUC>{
        const id = v4();
        
        // verificar se tem alguma banda no banco que é igual, fazer um get?
        const band = await this.bandGateway.getBandByName(input.name)
        if(band?.getName() == input.name){
            throw new Error(`${band?.getName()} already registered`)
        }

        await this.bandGateway.registerBand(
            new Band(id, input.name,input.genre,input.responsible)
        )

        return{
            
            name: input.name,
            genre: input.genre,
            responsible: input.responsible,
            id: id,
        }
    }
}

export interface RegisterBandInputUC {
    name: string;
    genre: string;
    responsible: string;
}

export interface RegisterBandOutputUC {
    
    name: string;
    genre: string;
    responsible: string;
    id: string;
}
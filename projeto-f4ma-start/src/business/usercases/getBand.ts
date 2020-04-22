import { BandGateway } from "../gateways/band";
import { Band } from "../entities/band"

export class GetBandUC {
    constructor(private bandGateway: BandGateway){}

    public async execute(input: GetBandInputUC): Promise<GetBandOutputUC> {
        
        if(!input.id && !input.name) {
            throw new Error("Invalid parameters")
          }
      
          if(input.id && input.name) {
            throw new Error("You can get a band by id OR by email")
          }
      
          let result
      
          if(input.id) {
            result = await this.bandGateway.getBandById(input.id)
          } else {
            result = await this.bandGateway.getBandByName(input.name)
          }
      
          if(!result){
            throw new Error("Band not found")
          }
      
          return {
            result
          }  

        
    }
}

export interface GetBandOutputUC {
    result: Band
    
}

export interface GetBandInputUC {
    id: string,
    name: string
}
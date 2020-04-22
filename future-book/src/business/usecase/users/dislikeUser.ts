import { DislikeUserGateway } from "../../gateway/dislikeUserGateway";


export class DislikeUserUC {
    constructor(private likeUserDB: DislikeUserGateway){}
    public async execute(input: DislikeUserInputUC): Promise<DislikeUserOutputUC>
    {   
        // condition: userId not following follodId and followId exists 
        const isConditionVerified = await this.likeUserDB.verifyDislikeUser(input.userId, input.dislikeId)
        
        if (!isConditionVerified) {
            throw new Error("Conditions not acceptables")
        }

        await this.likeUserDB.dislikeUser(input.userId,input.dislikeId)

        return{
            userId: input.userId,
            dislikeId: input.dislikeId
        }
    }
}


export interface DislikeUserInputUC {

    userId: string;
    dislikeId: string
  }

  
export interface DislikeUserOutputUC {
    userId: string;
    dislikeId: string
}
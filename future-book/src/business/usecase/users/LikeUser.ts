import { LikeUserGateway } from "../../gateway/likeUserGateway";


export class LikeUserUC {
    constructor(private likeUserDB: LikeUserGateway){}
    public async execute(input: LikeUserInputUC): Promise<LikeUserOutputUC>
    {   
        // condition: userId not following follodId and followId exists 
        const isConditionVerified = await this.likeUserDB.verifyLikeUser(input.userId, input.likeId)
        
        if (!isConditionVerified) {
            throw new Error("Conditions not acceptables")
        }

        await this.likeUserDB.likeUser(input.userId,input.likeId)

        return{
            userId: input.userId,
            likeId: input.likeId
        }
    }
}


export interface LikeUserInputUC {

    userId: string;
    likeId: string
  }

  
export interface LikeUserOutputUC {
    userId: string;
    likeId: string
}
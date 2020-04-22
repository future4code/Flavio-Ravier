import { BaseDB } from "./dataDataBase";
import { LikeUserGateway } from "../business/gateway/likeUserGateway";

export class LikeUserDB extends BaseDB implements LikeUserGateway{
    private likeTableName = "like_f_book";
    private userTableName = "users_f_book";

    public async verifyLikeUser(inputUserId: string, inputLikedId: string): Promise<Boolean> {
        const likeIdExists = await this.connection.raw(`
            SELECT * FROM ${this.userTableName}
            WHERE id = "${inputLikedId}";
        `)
        
        const isLiked = await this.connection.raw(`
            SELECT * FROM ${this.likeTableName}
            WHERE userId = "${inputUserId}" and likedId = "${inputLikedId}" 
        `)

        return (likeIdExists[0][0] && !isLiked[0][0])
    }

    public async verifyDislikeUser(inputUserId: string, inputLikedId: string): Promise<Boolean> {
        const likeIdExists = await this.connection.raw(`
            SELECT * FROM ${this.userTableName}
            WHERE id = "${inputUserId}";
        `)
        
        const isLiked = await this.connection.raw(`
            SELECT * FROM ${this.likeTableName}
            WHERE userId = "${inputUserId}" and likedId = "${inputLikedId}" 
        `)

        return (likeIdExists[0][0] && isLiked[0][0])
    }

    public async likeUser(inputUserId: string, inputFollowId: string): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.likeTableName} (userId, likedId)
            VALUES ('${inputUserId}','${inputFollowId}')   
        `)
    }
    public async dislikeUser(inputUserId: string, inputDislikedId: string): Promise<void> {
        await this.connection.raw(`
            DELETE FROM ${this.likeTableName} 
            WHERE userId='${inputUserId}' and likedId='${inputDislikedId}'   
        `)
    }
}
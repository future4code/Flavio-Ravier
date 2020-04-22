export interface LikeUserGateway{
    likeUser(userId: string, likedId: string): Promise<void>
    verifyLikeUser(userId: string, likedId: string): Promise<Boolean>
}
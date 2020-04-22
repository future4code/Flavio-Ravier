export interface DislikeUserGateway{
    dislikeUser(userId: string, likedId: string): Promise<void>
    verifyDislikeUser(userId: string, likedId: string): Promise<Boolean>
}
const initialState = {
    allPosts: [],
};

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_POST":
            const newPostList = [...state.allPosts, action.payload.post]
            return { ...state, allPosts: newPostList };

        case "SET_POSTS":
            return { ...state, allPosts: action.payload.posts };

        case "LIKE_POST":
             // Itera sob o array criando uma cópia onde o post
            // com o id informado tenha o seu likedByMe invertido
           
            const postList = state.allPosts.map((post) => {
                if(post.id === action.payload.postId){
                    return { ...post, likedByMe: !post.likedByMe }
                } else {
                    return post
                }
            })

            // Retorna o novo estado com o post curtido
            return { ...state, allPosts: postList }
        default:
            return state;
    }
}
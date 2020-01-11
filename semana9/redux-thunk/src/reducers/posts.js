const initialState ={
    allPosts : [
        {
            id:1,
            text:"post legal",
            likedByMe:false
        },
        {
            id:2,
            text:"post outro, esse tem like",
            likedByMe:true
        }
    ]
}

export const postsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "CREAT_POST":
            const newPostList = [...state.allPosts,action.payload.post]
            return {...state,allPosts: newPostList}
        default:
            return state;

    }
}
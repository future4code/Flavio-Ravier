import axios from 'axios';

export const likePostAction = (postId) => ({
    type: "LIKE_POST",
    payload: {
        postId,
    }
})

export const setPostsAction = (posts) => ({
    type: "SET_POSTS",
    payload: {
        posts,
    }
})

export const getPosts = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts");

    dispatch(setPostsAction(response.data.posts));
}

export const createPost = (text) => async (dispatch, getState) => {
    await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts", { text: text });

    dispatch(getPosts())
}

export const likePost = (postId) => async (dispatch, getState) => {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts/${postId}/like`);

    dispatch(getPosts())
}
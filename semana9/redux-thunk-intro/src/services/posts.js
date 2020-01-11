import axios from "axios";

export const getPostsRequest = () => {
  return axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts"
  );
};

export const likePostRequest = id => {
  return axios.put(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts/${id}/like`
  );
};

export const createPostRequest = text => {
  return axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxPosts/posts",
    {
      text
    }
  );
};

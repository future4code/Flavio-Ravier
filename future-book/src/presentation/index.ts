import express from "express";
import { CreateUserEndPoint } from "./endpoints/users/createUser";
import { LoginEndPoint } from "./endpoints/users/login";
// import { GetUserDataEndpoint } from "./endpoints/getUserData";
// import { CreateRecipeEndPoint } from "./endpoints/createRecipe";
import { LikeUserEndPoint } from "./endpoints/users/likeUser";
import { DislikeUserEndPoint } from "./endpoints/users/dislikeUser";
// import { FeedEndPoint } from "./endpoints/feed"

const app = express();
app.use(express.json());

app.post("/createUser", CreateUserEndPoint); 
// app.post("/createRecipe", CreateRecipeEndPoint); 
app.post("/likeUser", LikeUserEndPoint); 
app.post("/dislikeUser", DislikeUserEndPoint); 
// app.get("/feed", FeedEndPoint); 
app.get("/login", LoginEndPoint); 
// app.get("/getUserData", GetUserDataEndpoint); 

export default app;
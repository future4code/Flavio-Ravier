import { combineReducers } from "redux";
import {postReducer} from './posts'
import { postsReducer } from "../../../redux-thunk-intro/src/reducers/posts";

export const rootReducer = combineReducers({
  posts: postsReducer
});


import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { postReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
  userData: userReducer,
  userPosts: postReducer,
});

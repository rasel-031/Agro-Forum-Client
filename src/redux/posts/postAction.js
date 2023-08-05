import { USER_POST_SUCCESS, USER_POST_REQUEST, USER_POST_FAILURE } from "./postActionType";



export const userPostRequest = (postData) => {
    return {
      type: USER_POST_REQUEST,
      payload: postData,
    };
  };
  
  export const userPostSuccess = (data) => {
    return {
      type: USER_POST_SUCCESS,
      payload: data,
    };
  };
  
  export const userPostFailure = (error) => {
    return {
      type: USER_POST_FAILURE,
      error,
    };
  };
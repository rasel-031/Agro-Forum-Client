import { USER_POST_SUCCESS, USER_POST_REQUEST, USER_POST_FAILURE, USER_STORIES_REQUEST, USER_STORIES_FAILURE, USER_STORIES_SUCCESS } from "./postActionType";



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

  export const userStoriesRequest = () =>{
    return{
      type: USER_STORIES_REQUEST,
      payload: {},
    }
  }

  export const userStoriesSuccess = (data) =>{
    return{
      type: USER_STORIES_SUCCESS,
      payload: data,
    }
  }

  export const userStoriesFailure = (error) =>{
    return{
      type: USER_STORIES_FAILURE,
      error,
    }
  }
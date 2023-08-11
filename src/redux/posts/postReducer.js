import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_STORIES_FAILURE,
  USER_STORIES_SUCCESS,
  USER_STORIES_REQUEST,
} from "./postActionType";

const initialState = {
  loading: false,
  post_status: {},
  user_stories: {},
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post_status: action.payload,
      };
    case USER_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case USER_STORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        user_stories: action.payload,
      };
    case USER_STORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

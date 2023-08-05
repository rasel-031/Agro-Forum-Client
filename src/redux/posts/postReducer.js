import { USER_POST_REQUEST, USER_POST_SUCCESS, USER_POST_FAILURE } from "./postActionType";

const initialState = {
    loading: false,
    post_status: {},
    error: "",
}

export const postReducer = (state = initialState, action) =>{
    switch (action.type) {
        case USER_POST_REQUEST:
            return{
                ...state,
                loading: true,
            };
        case USER_POST_SUCCESS:
            return{
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
    
        default: return state;
    }
};
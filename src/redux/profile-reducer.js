const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    posts: [
        {id: 0, message: 'Hello, my name is Aidar', likeCount: 17},
        {id: 1, message: 'Hello, my name is Eldar', likeCount: 14},
        {id: 2, message: 'Hello, my name is Umar', likeCount: 21},
    ],
    newPostText: 'Hello, my message is  ',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [state.posts, newPost],
                newPostText: ''
            };
        }
            ;

        case
        UPDATA_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
            ;

        case
        SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
            ;

        default:
            return state;
    }
    ;
};

export const addPostAC = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE});
export const updataNewPostTextAC = (text) => ({type: UPDATA_NEW_POST_TEXT, newText: text});

export default profileReducer;
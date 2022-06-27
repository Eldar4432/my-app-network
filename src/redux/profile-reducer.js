const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 0, message: 'Hello, my name is Aidar', like: 17847381},
        {id: 0, message: 'Hello, my name is Eldar', like: 14847381},
        {id: 0, message: 'Hello, my name is Umar', like: 21847381},
    ],
    newPostText: 'Hello, my message is  '
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [state.posts, newPost],
                newPostText: ''
            };
        };
        case
        UPDATA_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        };

        default:
            return state;
    };
};

export const addPostAC = () => ({type: ADD_POST});
export const updataNewPostTextAC = (text) => ({type: UPDATA_NEW_POST_TEXT, newText: text});

export default profileReducer;
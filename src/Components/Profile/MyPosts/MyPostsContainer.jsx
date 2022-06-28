import React from "react";
import {addPostAC, updataNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


export const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updataNewPostTextAC(text);
            dispatch(action);
        },

        addPost: () => {
            dispatch ( addPostAC() );
        }

    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
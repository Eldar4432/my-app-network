import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { updataNewPostTextAC } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post ley={p.id} message={p.message} like={p.like} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = (props) => {
    props.addPost();
  };

  let onPostChange = (props) => {
    let text = newPostElement.current.value;
    let action = updataNewPostTextAC(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={null}
        ></textarea>
      </div>

      <div>
        <button onClick={onAddPost}> Add Post</button>
      </div>
      <div className={s.posts_name}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
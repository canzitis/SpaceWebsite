import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let posts = props.posts.map((p) => (
    <Post message={p.message} liksCount={p.liksCount} imgAva={p.imgAva} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.item}>
      <div className={classes.myPosts}>My posts</div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          className={classes.textarea}
        />
        <div className={classes.buttonPost}>
          <button onClick={onAddPost}>Add posts</button>
        </div>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;

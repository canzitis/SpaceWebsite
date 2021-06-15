import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.imgAva} />
      {props.message}
      <div className={classes.colorLike}>
        <span>like</span> {props.liksCount}
      </div>
    </div>
  );
};

export default Post;

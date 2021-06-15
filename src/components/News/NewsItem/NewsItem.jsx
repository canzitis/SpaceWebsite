import classes from "../News.module.css";

const NewsItem = (props) => {
  return (
    <div className={classes.newsItem}>
      <h4>{props.news}</h4>
      <img src={props.img} />
      <div className={classes.liks}>
        <span>Liks: {props.liks}</span>
      </div>
    </div>
  );
};

export default NewsItem;

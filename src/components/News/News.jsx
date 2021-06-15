import Comments from "./Comments/Comments";
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";
import React from "react";


const News =  (props) => {
  let state = props.store.getState().newsPage;
  const news = state.news.map((n) => (
    <NewsItem news={n.news} liks={n.liks} img={n.img} id={n.id} />
  ));

  /*  const comments = props.state.comments.map((c) => (
    <Comments ava={c.ava} comment={c.comment} id={c.id} />
  )); */

  return (
    <div className={classes.news}>
      <div className={classes.newsItem}>{news}</div>
    </div>
  );
};

export default News;
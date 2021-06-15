import React from "react";
import classes from "./PreLoader.module.css";
import preloader from "../../../assets/images/preloader.gif";

const PreLoader = (props) => {
  return (
    <div className={classes.preloaderGif}>
      <img alt="" src={preloader} />
    </div>
  );
};

export default PreLoader;

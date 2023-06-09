import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.ball}></div>
      <div className={classes.ball}></div>
      <div className={classes.ball}></div>
    </div>
  );
};

export default Loading;

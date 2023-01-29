import React, { Fragment } from "react";
import styles from "./ScrollDown.module.css";

const ScrollDown = () => {
  return (
    <Fragment>
      <span className={styles.mouseBtn}>
        <span className={styles.mouseScroll}></span>
      </span>
      <span>Scroll Down</span>
    </Fragment>
  );
};

export default ScrollDown;

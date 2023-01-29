import React, { Fragment } from "react";
import styles from "./Button.module.css";

const Button = ({ type = "button", text, ...otherProps }) => {
  return (
    <Fragment>
      {type === "link" && (
        <a {...otherProps} className={styles.button}>
            <span>{text}</span>
        </a>
      )}
      {type === "button" && (
        <button {...otherProps} className={styles.button}>
          {text}
        </button>
      )}
    </Fragment>
  );
};

export default Button;

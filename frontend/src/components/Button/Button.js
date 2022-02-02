import React from "react";
import buttonStyles from "./Button.module.css";
import cx from "classnames";

function Button(props) {
  const { color, body, type } = props;
  return (
    <button
      className={cx(buttonStyles.btn, buttonStyles[type])}
      style={{ background: color }}
      onClick={props.onClick}
    >
      {body}
    </button>
  );
}

export default Button;

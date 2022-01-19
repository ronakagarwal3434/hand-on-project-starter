import React from "react";
import buttonStyles from "./Button.module.css";

function Button(props) {
  const { color, body } = props;
  return (
    <div>
      <button className={buttonStyles.btn} style={{ background: color }}>
        {body}
      </button>
    </div>
  );
}

export default Button;

import React from "react";
import InputStyles from "./Input.module.css";

export default function Input(props) {
  return (
    <input
      className={InputStyles.input}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  );
}

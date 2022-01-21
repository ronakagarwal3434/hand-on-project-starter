import React from "react";
import InputStyles from "./Input.module.css";

export default function Input(props) {
  const { type, placeholder } = props;
  return (
    <input
      className={InputStyles.input}
      type={type}
      placeholder={placeholder}
    />
  );
}

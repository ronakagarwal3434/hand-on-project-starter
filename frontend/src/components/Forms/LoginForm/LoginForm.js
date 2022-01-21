import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import LoginFormStyles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={LoginFormStyles.form}>
      <h1 className={LoginFormStyles.heading}>Login to your account</h1>
      <Input type="email" placeholder="Email address" />
      <Input type="text" placeholder="Password" />
      <Button body="Login" color="#142683" type="fullWidth" />
    </div>
  );
}

import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import SignupFormStyles from "./SignupForm.module.css";

export default function SignupForm() {
  return (
    <div className={SignupFormStyles.form}>
      <h1 className={SignupFormStyles.heading}>Login to your account</h1>
      <Input type="name" placeholder="Full Name" />
      <Input type="email" placeholder="Email address" />
      <Input type="text" placeholder="Password" />
      <Button body="Signup" color="#142683" type="fullWidth" />
    </div>
  );
}

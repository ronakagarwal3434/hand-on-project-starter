import React from "react";
import SignupStyles from "./Signup.module.css";
import loginlogo from "../../images/loginlogo.svg";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";

export default function Login() {
  return (
    <div>
      <div className={SignupStyles.container}>
        <div className={SignupStyles.left}>
          <img src={loginlogo} />
          <h1 className={SignupStyles.heading}>Welcome to your Dashboard</h1>
          <p className={SignupStyles.text}>
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
        <div className={SignupStyles.right}>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

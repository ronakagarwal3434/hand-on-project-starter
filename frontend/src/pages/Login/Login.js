import React from "react";
import LoginStyles from "./Login.module.css";
import loginlogo from "../../images/loginlogo.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <div className={LoginStyles.container}>
        <div className={LoginStyles.left}>
          <img src={loginlogo} />
          <h1 className={LoginStyles.heading}>Welcome to your Dashboard</h1>
          <p className={LoginStyles.text}>
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
        <div className={LoginStyles.right}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import LoginFormStyles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "email") setEmail(e.target.value);
    if (e.target.name == "password") setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
      {
        email,
        password,
      },
    );
    if (response.data.status == "error") toast.error(response.data.message);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.data.token);
      // setUser(response.data.data.user);
      navigate("/");
    }
  };

  return (
    <div className={LoginFormStyles.form}>
      <h1 className={LoginFormStyles.heading}>Login to your account</h1>
      <Input
        type="email"
        name="email"
        placeholder="Email address"
        value={email}
        handleChange={handleChange}
      />
      <Input
        type="text"
        name="password"
        placeholder="Password"
        value={password}
        handleChange={handleChange}
      />
      <Button
        body="Login"
        color="#142683"
        type="fullWidth"
        onClick={handleSubmit}
      />
      <p className={LoginFormStyles.text}>
        New here? <Link to="/signup"> Signup</Link>
      </p>
    </div>
  );
}

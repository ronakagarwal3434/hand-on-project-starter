import React, { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import SignupFormStyles from "./SignupForm.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export default function SignupForm() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") setName(e.target.value);
    if (e.target.name == "email") setEmail(e.target.value);
    if (e.target.name == "password") setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
      {
        name,
        email,
        password,
      },
    );
    if (response.data.status == "error") toast.error(response.data.message);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      navigate("/login");
    }
  };

  return (
    <div className={SignupFormStyles.form}>
      <h1 className={SignupFormStyles.heading}>Register</h1>
      <Input
        type="name"
        placeholder="Full Name"
        name="name"
        value={name}
        handleChange={handleChange}
      />
      <Input
        type="email"
        placeholder="Email address"
        name="email"
        value={email}
        handleChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Password"
        name="password"
        value={password}
        handleChange={handleChange}
      />
      <Button
        body="Signup"
        color="#142683"
        type="fullWidth"
        onClick={handleSubmit}
      />
      <p className={SignupFormStyles.text}>
        Already have an account? <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

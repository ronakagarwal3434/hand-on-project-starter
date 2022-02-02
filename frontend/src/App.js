import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";

import Dashboard from "./pages/DashboardPage/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Error from "./pages/Error/Error";
import "./App.css";
import axios from "axios";

function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  async function checkToken(token) {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/auth/userbytoken`,
      {
        token,
      },
    );
    if (response.data.status == "error") {
      localStorage.removeItem("token");
      toast.info(response.data.message);
      navigate("/");
    } else {
      setUser(response.data.data);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token);
    }
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            user && user._id ? <Dashboard /> : <Login setUser={setUser} />
          }
        />
        <Route
          path="/signup"
          element={user && user._id ? <Dashboard /> : <Signup />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

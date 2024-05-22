// src/pages/Auth/LoginPage.js

import React from "react";
import LoginForm from "../../auth/LoginForm";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./LoginPage.css"; // Import CSS file for styling

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response.body);

      if (response.ok) {
        // If login is successful, redirect the user to the dashboard or perform any other actions
        navigate("/dashboard");
        Cookies.set("name", "value");

        console.log("Login successful");
      }
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

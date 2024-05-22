// src/pages/Auth/RegisterPage.js

import React from "react";
import RegisterForm from "../../auth/RegisterForm";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData);

      if (!response.ok) {
        if (response.status === 400) {
          const data = await response.json();
          throw new Error(data.message);
        } else {
          throw new Error("An error occurred while registering.");
        }
      }

      const data = await response.json();

      console.log("Registration successful", data);

      // If registration is successful, redirect the user to the login page or perform any other actions
      navigate("/login");
      Cookies.set("token", data.token);
    } catch (error) {
      console.error("Registration failed", error.message);
      // Display an error message to the user
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;

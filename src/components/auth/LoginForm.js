// src/components/auth/LoginForm.js

import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

import "./LoginForm.css"; // Import CSS file for styling

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        className="login-input"
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className="login-input"
        label="Password:"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="login-button" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

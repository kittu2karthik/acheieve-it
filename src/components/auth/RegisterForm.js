// // src/components/auth/RegisterForm.js

import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const RegisterForm = ({ onSubmit, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      onSubmit({ name, email, password, passwordConfirm });
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }
    if (!passwordConfirm) {
      setPasswordConfirmError("Confirm password is required");
      isValid = false;
    } else if (password !== passwordConfirm) {
      setPasswordConfirmError("Passwords do not match");
      isValid = false;
    }
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name:"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={nameError}
      />
      <Input
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />
      <Input
        label="Password:"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
      />
      <Input
        label="Confirm Password:"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        error={passwordConfirmError}
      />
      {error && <div className="error-message">{error}</div>}
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;

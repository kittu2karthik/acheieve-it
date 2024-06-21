// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import LoginPage from "./components/pages/Auth/LoginPage";
import RegisterPage from "./components/pages/Auth/RegisterPage";
import DashboardPage from "./components/pages/Dashboard/DashboardPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

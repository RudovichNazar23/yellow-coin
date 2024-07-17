import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./components/Pages/HomePage";
import LoginForm from "./components/Pages/LoginForm";
import  RegistrationForm from "./components/Pages/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }/>
              <Route path="/login" element={<LoginForm />}/>
              <Route path="/registration" element={<RegistrationForm />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

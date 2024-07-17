import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./components/Pages/HomePage";

import FormContainer from "./components/Pages/FormContainer";

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
              <Route path="/login" element={<FormContainer />}/>
              <Route path="/registration" element={<FormContainer />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

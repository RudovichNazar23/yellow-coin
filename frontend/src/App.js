import React from "react";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./components/Pages/HomePage";

import FormContainer from "./components/Pages/FormContainer";

import PageNotFound from "./components/Pages/PageNotFound";

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
              <Route path="/login" element={<FormContainer initial={true} />}/>
              <Route path="/registration" element={<FormContainer initial={false} />}/>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

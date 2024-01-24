import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/component/Home";
import Login from "./components/component/Login";
import Signup from "./components/component/Signup";
import Main from "./components/component/Main";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  )
}



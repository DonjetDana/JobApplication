import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Router from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}



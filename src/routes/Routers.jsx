import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../View/component/HomePage/Homepage";
import Login from "../View/Login";
import Register from "../View/Register";
import SidebarAnother from "../View/component/SidebarAnother";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/navbar" element={<SidebarAnother />} />
    </Routes>
  );
};

export default Routers;

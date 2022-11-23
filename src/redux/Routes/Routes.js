import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contacto from "../Pages/Contacto/Contacto";
import Login from "../Pages/LogIn/Login";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="login" element={<Login />} />
    </ReactDomRoutes>
  );
};

export default Routes;

import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contacto from "../Pages/Contacto/Contacto";
import Login from "../Pages/LogIn/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Register from "../Pages/Register/Register";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
    </ReactDomRoutes>
  );
};

export default Routes;

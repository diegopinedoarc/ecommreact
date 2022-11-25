import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contacto from "../Pages/Contacto/Contacto";
import Login from "../Pages/LogIn/Login";
import Checkout from "../Pages/Checkout/Checkout";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
    </ReactDomRoutes>
  );
};

export default Routes;

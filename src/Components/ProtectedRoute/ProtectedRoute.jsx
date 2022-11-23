import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? ( children : )
};

export default ProtectedRoute;

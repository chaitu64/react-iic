import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  if (!token || isAdmin !== "true") {
    return <Navigate to="/admin-portal-login" replace />;
  }

  return children;
}

export default ProtectedRoute;
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [isAuth] = useState(localStorage.getItem("authorized") === "true");

  const location = useLocation();
  const previousPath = location.state?.from || "/posts";

  return !isAuth ? (
    <Navigate to="/login" state={{ from: previousPath }} />
  ) : (
    children
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

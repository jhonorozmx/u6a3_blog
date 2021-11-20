import React from "react";
import notFound from "../assets/images/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mid-row">
      <img src={notFound} alt="Error 404" />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;

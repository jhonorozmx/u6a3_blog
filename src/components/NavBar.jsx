import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="top-row">
      <div className="menu">
        <div className={"menu-item"}>
          <button
            className={`menu-btn ${location.pathname === "/" ? "current" : ""}`}
            aria-label="Home"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <i className="fas fa-home"></i>
          </button>
          <span className="tooltip">Home</span>
        </div>

        <div className="menu-item">
          <button
            className={`menu-btn ${
              location.pathname === "/posts/" ? "current" : "inactive"
            }`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/posts");
            }}
          >
            <i className="fas fa-file-alt"></i>
          </button>
          <span className="tooltip">Posts</span>
        </div>

        <div className="menu-item">
          {localStorage.getItem("authorized") === "true" ? (
            <>
              <button
                className={`menu-btn sign-out`}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("authorized", "false");
                  navigate("/");
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
              </button>
              <span className="tooltip">Sign Out</span>
            </>
          ) : (
            <>
              <button
                className={`menu-btn ${
                  location.pathname === "/login" ? "current" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                <i className="fas fa-sign-in-alt"></i>
              </button>
              <span className="tooltip">Log In</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated } from "../features/authentication/authSelectors";
import { isAuth, logOut } from "../features/authentication/authThunks";

const NavBar = () => {
  // Routing
  const navigate = useNavigate();
  const location = useLocation();

  // Redux State
  const dispatch = useDispatch();
  const authorized = useSelector(selectIsAuthenticated);

  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
  };

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
          {authorized ? (
            <>
              <button className={`menu-btn`} onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
              </button>
              <span className="tooltip">Log Out</span>
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

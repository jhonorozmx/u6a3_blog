import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";

const LoginPage = () => {
  // State
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const submitHandler = (e) => {
    e.preventDefault();

    if (email !== "example@example.com" || pass !== "password") {
      setError(true);
      return;
    }

    setError(false);
    localStorage.setItem("authorized", "true");
    navigate(from, { replace: true });
  };

  return (
    <div className="mid-row">
      {error && (
        <MessageBox
          message="Incorrect user and/or password"
          close={() => setError(false)}
        />
      )}
      <form className="login-form" onSubmit={submitHandler}>
        <h1>Log In</h1>
        <div>
          <label htmlFor="email">E-mail</label> <br />
          <input
            type="email"
            id="email"
            placeholder="e.g. jhon@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            placeholder="Introduce your password"
            minLength="8"
            maxLength="25"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

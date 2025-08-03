import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dummy login successful! Redirecting to dashboard...");
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p className="subtitle">
            Sign in to your SheCan Intern Portal account
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-input"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary login-button"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>

        <div className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>

      <div className="login-branding">
        <h2>She Can Foundation</h2>
        <p>Empowering women through technology and education</p>
      </div>
    </div>
  );
}

export default Login;

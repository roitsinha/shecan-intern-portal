import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your SheCan Intern Portal account</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
              required
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
            />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
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

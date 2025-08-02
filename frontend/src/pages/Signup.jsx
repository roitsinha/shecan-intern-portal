import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Join Our Mission</h1>
          <p>Create your SheCan Intern Portal account</p>
        </div>

        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

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
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              className="form-input"
              required
            />
            <div className="password-hint">
              Use at least 8 characters with a mix of letters and numbers
            </div>
          </div>

          <div className="terms-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>

      <div className="signup-branding">
        <h2>She Can Foundation</h2>
        <p>Empowering the next generation of women in tech</p>
        <div className="benefits-list">
          <div className="benefit-item">
            <span>✓</span> Access to mentorship programs
          </div>
          <div className="benefit-item">
            <span>✓</span> Track your impact
          </div>
          <div className="benefit-item">
            <span>✓</span> Join our community
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

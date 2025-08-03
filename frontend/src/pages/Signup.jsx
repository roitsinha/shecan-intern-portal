import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dummy signup successful for ${fullname}! Redirecting to login...`);
    window.location.href = "/login";
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Join Our Mission</h1>
          <p className="subtitle">Create your SheCan Intern Portal account</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="form-input"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              autoComplete="name"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div className="password-hint">
              Use at least 8 characters with a mix of letters and numbers
            </div>
          </div>

          <div className="terms-agreement">
            <input
              type="checkbox"
              id="terms"
              required
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <label htmlFor="terms">
              I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary signup-button"
            disabled={!fullname || !email || !password || !termsChecked}
          >
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

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>She Can Foundation: Intern Portal</h1>
        <div className="hero-content">
          <div className="hero-text">
            <p>Empowerment through mentorship and community</p>
            <div className="cta-buttons">
              <Link to="/login" className="primary-btn">
                Login
              </Link>
              <Link to="/signup" className="secondary-btn">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="value-propositions">
        <div className="value-card">
          <h3>Empower</h3>
          <p>Empowerment through mentorship and community.</p>
        </div>
        <div className="value-card">
          <h3>Code</h3>
          <p>Coding for real-world impact.</p>
        </div>
        <div className="value-card">
          <h3>Uplift</h3>
          <p>Uplifting communities through technology.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>SheCan Intern Portal</h1>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

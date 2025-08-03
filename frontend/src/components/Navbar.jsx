import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // import logo image

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "home", label: "Home", isInternal: true },
    { path: "dashboard", label: "Dashboard", isInternal: false },
    { path: "leaderboard", label: "Leaderboard", isInternal: false },
    { path: "about", label: "About", isInternal: true },
    { path: "contact", label: "Contact", isInternal: true },
  ];

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.isInternal) {
      if (location.pathname === "/") {
        const section = document.getElementById(link.path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: link.path } });
      }
    } else {
      navigate(`/${link.path}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SheCan Logo" className="navbar-logo-img" />
          SheCan Intern Portal
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.path}
              className={`nav-link ${
                (location.pathname === "/" &&
                  location.state?.scrollTo === link.path) ||
                (location.pathname === "/" &&
                  link.path === "home" &&
                  !location.state)
                  ? "active"
                  : location.pathname === `/${link.path}`
                  ? "active"
                  : ""
              }`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SheCan Intern Portal</h2>
      <div>
        <Link to="/" style={styles.link}>
          Login
        </Link>
        <Link to="/signup" style={styles.link}>
          Signup
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/leaderboard" style={styles.link}>
          Leaderboard
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#343a40",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;

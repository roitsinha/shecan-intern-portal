import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import About from "./About";
import Leaderboard from "./Leaderboard";
import Contact from "./Contact";
import "../styles/Home.css";
import bannerImage from "../assets/she-can-banner.png";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home">
      <section id="home" className="home-main">
        <div className="home-text">
          <h1>She Can Foundation: Intern Portal</h1>
          <p className="subtitle">
            Empowerment through mentorship and community
          </p>
          <div className="home-buttons">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
            <Link to="/signup" className="btn-secondary">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img
            src={bannerImage}
            alt="She Can Intern Portal"
            className="home-banner"
          />
        </div>
      </section>

      <section id="leaderboard">
        <Leaderboard />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;

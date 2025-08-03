import React from "react";
import { FiBook, FiMonitor, FiUsers } from "react-icons/fi";
import "../styles/About.css";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1 className="page-title">About She Can Foundation</h1>
          <p className="description main-description">
            The She Can Foundation is a non-profit dedicated to uplifting
            underprivileged women and girls by providing access to quality
            education, essential skills training, and vital digital
            opportunities. We believe in creating a world where every woman has
            the chance to thrive and contribute.
          </p>

          <div className="feature">
            <FiBook className="icon" />
            <div className="feature-text">
              <p className="feature-title">Education</p>
              <p className="feature-desc">
                Access to schooling and advanced learning resources.
              </p>
            </div>
          </div>

          <div className="feature">
            <FiMonitor className="icon" />
            <div className="feature-text">
              <p className="feature-title">Skills Training</p>
              <p className="feature-desc">
                Workshops on coding, digital literacy, and vocational skills.
              </p>
            </div>
          </div>

          <div className="feature">
            <FiUsers className="icon" />
            <div className="feature-text">
              <p className="feature-title">Empowerment</p>
              <p className="feature-desc">
                Building confidence and fostering community.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src={aboutImage}
            alt="Empowering Women"
            className="responsive-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

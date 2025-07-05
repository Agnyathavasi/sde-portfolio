// src/components/Education.jsx
import React from "react";
import "../../styles/Education.css";

const Education = ({ darkMode }) => {
  return (
    <section
      className={`section education ${darkMode ? "dark" : "light"}`}
      id="education"
    >
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card card fade-in">
          <div className="education-header">
            <h3 className="institution">
              Dayananda Sagar College of Engineering
            </h3>
            <div className="degree">Bachelor of Engineering</div>
            <div className="location">Bengaluru, India</div>
          </div>

          <div className="education-details">
            <div className="period">Aug 2018 – Jul 2022</div>
            <div className="description">
              Graduated with a degree in Engineering, specializing in software
              development and web technologies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

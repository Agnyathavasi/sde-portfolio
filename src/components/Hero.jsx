// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import "../../styles/Hero.css";

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`} id="home">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
            <h4 className="hero-subtitle">Hello, I'm</h4>
            <h1 className="hero-title">Vishwajith H H</h1>
            <h2 className="hero-role">Software Development Engineer II</h2>
            <p className="hero-description">
              Passionate developer with expertise in VueJS, ReactJS, and
              building scalable web applications. Proven track record of
              optimizing performance and enhancing user experience.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">
                Get In Touch
              </a>
              <a href="#projects" className="btn">
                View Projects
              </a>
            </div>
          </div>

          <div className={`hero-info ${isVisible ? "fade-in delay-1" : ""}`}>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>vishwajith.shastry@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91 8277070162</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Bangalore, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

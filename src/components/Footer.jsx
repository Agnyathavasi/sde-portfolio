// src/components/Footer.jsx
import React from "react";
import "../../styles/Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`} id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-text">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you have a project in mind or just want to
              connect!
            </p>

            <div className="contact-details">
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
            </div>
          </div>

          <div className="footer-form">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Vishwajith H H. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

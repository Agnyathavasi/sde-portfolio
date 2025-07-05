// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import light from "../assets/lightThemeLogo.png";
import dark from "../assets/darkThemeLogo.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest(".nav") &&
        !e.target.closest(".mobile-menu-btn")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <div className="header-content">
          {/* <div className="logo">
            <span className="logo-text">VH</span>
          </div> */}
          <img src={darkMode ? dark : light} width={60} height={60} />

          <div style={{ display: "flex", alignItems: "center" }}>
            <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
              <a href="#skills" className="nav-link" onClick={closeMobileMenu}>
                Skills
              </a>
              <a
                href="#experience"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Experience
              </a>
              <a
                href="#education"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Education
              </a>
              <a
                href="#projects"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Projects
              </a>

              {/* Mobile-only actions */}
              <div className="mobile-actions">
                <button
                  className="theme-toggle mobile"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <span className="theme-icon">☀️</span>
                  ) : (
                    <span className="theme-icon">🌙</span>
                  )}
                </button>
                <a
                  href="#contact"
                  className="contact-btn btn mobile"
                  onClick={closeMobileMenu}
                >
                  Contact Me
                </a>
              </div>
            </nav>

            <div className="header-actions">
              <a href="#contact" className="contact-btn btn">
                Contact Me
              </a>
              <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? (
                  <span className="theme-icon">☀️</span>
                ) : (
                  <span className="theme-icon">🌙</span>
                )}
              </button>
            </div>
          </div>

          <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className="menu-icon">{mobileMenuOpen ? "✕" : "☰"}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

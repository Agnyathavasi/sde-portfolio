// src/components/Projects.jsx
import React, { useState } from "react";
import "../../styles/Projects.css";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "UI Clones",
      description:
        "Created front-end clones of well-known websites using React. These include Youtube, Whatsapp, Windows 11, Google notes",
      technologies: ["React", "CSS3", "JavaScript"],
    },
    {
      title: "Interior Design Web Application",
      description:
        "Developed an interior design webpage entirely from scratch using Node.js for the backend and MongoDB for the database. Designed and implemented core features, including user authentication, project management, and design customization.",
      technologies: ["Node.js", "MongoDB", "Express", "React"],
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <section
      className={`section projects ${darkMode ? "dark" : "light"}`}
      id="projects"
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-container">
          <div className="projects-nav">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-tab ${
                  index === activeProject ? "active" : ""
                }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </button>
            ))}
          </div>

          <div className="project-details card fade-in">
            <h3 className="project-title">{projects[activeProject].title}</h3>
            <p className="project-description">
              {projects[activeProject].description}
            </p>

            <div className="project-technologies">
              <h4>Technologies Used:</h4>
              <div className="tech-list">
                {projects[activeProject].technologies.map((tech, idx) => (
                  <span key={idx} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

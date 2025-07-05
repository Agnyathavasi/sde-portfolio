// src/components/Skills.jsx
import React from "react";
import "../../styles/Skills.css";

const Skills = ({ darkMode }) => {
  const webTech = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "VueJS",
    "Vuex",
    "ReactJS",
    "Redux",
    "SASS",
  ];
  const tools = [
    "Vite",
    "Cron",
    "Webpack",
    "Luxon",
    "Momentjs",
    "Loadash",
    "Npm",
    "Node",
    "Git",
  ];
  const additional = ["AWS", "Postman", "Jenkins", "JIRA"];

  return (
    <section
      className={`section skills ${darkMode ? "dark" : "light"}`}
      id="skills"
    >
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-category-title">Web Technologies</h3>
            <div className="skills-list">
              {webTech.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item fade-in delay-${index % 3}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Tools</h3>
            <div className="skills-list">
              {tools.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item fade-in delay-${index % 3}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Additional Knowledge</h3>
            <div className="skills-list">
              {additional.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item fade-in delay-${index % 3}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// src/components/Experience.jsx
import React from "react";
import "../../styles/Experience.css";

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: "Software Development Engineer II",
      company: "Cyware Labs",
      period: "Current",
      achievements: [
        "Built 15+ reusable components and 3 micro frontends, reducing feature development time by 35%",
        "Contributed to Vue upgrade from 2.7 to 3.2, leading to performance boosts and security enhancements",
        "Reduced build time by 10%, eliminated 20+ unnecessary packages, and optimized 15+ API calls",
        "Integrated online sandboxes into the application, contributing to 10% growth in customer base",
      ],
    },
    {
      title: "Software Development Engineer I",
      company: "Cyware Labs",
      period: "2022",
      achievements: [
        "Implemented CRON jobs and time-related features with Moment.js and Luxon.js, supporting users in 100+ countries",
        "Created a new Dynamic Dashboard, reducing data analysis time by 40%",
        "Enabled 24/7 real-time monitoring of 500+ threat indicators",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Cyware Labs",
      period: "2021-2022",
      achievements: [
        "Learned and started maintaining Vue.js applications with TypeScript, SCSS, and Vite",
        "Resolved 1000+ issues and delivered 30+ customer-requested features",
        "Worked on 3 SOAR products, collaborating with cross-functional teams",
      ],
    },
  ];

  return (
    <section
      className={`section experience ${darkMode ? "dark" : "light"}`}
      id="experience"
    >
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item fade-in delay-${index}`}>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="job-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>

                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <span className="achievement-bullet">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

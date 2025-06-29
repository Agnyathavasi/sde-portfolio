// File: src/App.jsx
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <header className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Vishwajith H H</h1>
        <button onClick={toggleDarkMode} className="p-2 border rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="p-6 space-y-12 max-w-4xl mx-auto">
        <section id="about">
          <h2 className="text-xl font-bold mb-2">About Me</h2>
          <p>
            Software Development Engineer II at Cyware Labs. Experienced in
            building reusable components, micro frontends, and optimizations.
            Strong in React, Vue, TypeScript, Node.js.
          </p>
        </section>

        <section id="skills">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <p>
            HTML5, CSS3, JavaScript, TypeScript, ReactJS, Redux, VueJS, Vuex,
            SASS, Vite, Node.js, AWS, Postman, Jenkins, JIRA
          </p>
        </section>

        <section id="experience">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>Cyware Labs</strong> — SDE II (Aug 2023 – Present)
              <br />
              Reusable components, micro frontends, Vue upgrades, build
              optimizations.
            </li>
            <li>
              <strong>Cyware Labs</strong> — SDE I (Aug 2022 – Jul 2023)
              <br />
              Timezone, CRON jobs, dynamic dashboards, global support.
            </li>
            <li>
              <strong>Cyware Labs</strong> — Intern (Mar 2022 – Jul 2022)
              <br />
              Maintained Vue apps, resolved 1000+ issues, delivered 30+
              features.
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-xl font-bold mb-2">Projects</h2>

          <h3 className="text-lg font-semibold mt-4">Frontend</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://agnyathavasi.github.io/youtubeclone/"
                className="underline"
              >
                YouTube Clone
              </a>
            </li>
            <li>
              <a
                href="https://agnyathavasi.github.io/whatsapp/"
                className="underline"
              >
                WhatsApp Clone
              </a>
            </li>
            <li>
              <a
                href="https://agnyathavasi.github.io/windows-11/"
                className="underline"
              >
                Windows 11 UI
              </a>
            </li>
            <li>
              <a
                href="https://agnyathavasi.github.io/keeper/"
                className="underline"
              >
                Google Notes Clone
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Netflix Clone
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Spotify UI Clone
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Fullstack</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Interior Design Web App (Node.js, MongoDB)</li>
            <li>Custom Task Manager (MERN stack)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Designs</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="#" className="underline">
                Mobile Banking App — Figma
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                E-Commerce Dashboard — Figma
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="p-6 flex justify-center space-x-6 border-t">
        <a
          href="https://github.com/agnyathavasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://in.linkedin.com/in/vishwajith-h-h-045852207"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:vishwajith.shastry@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </footer>
    </div>
  );
}

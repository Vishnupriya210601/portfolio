import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Vishnupriya A</h1>
        <p className="subtitle">React JS Developer | 3.8+ Years Experience</p>
        <p className="intro">
          Passionate React developer with expertise in scalable UI development,
          performance optimization, and banking domain experience.
        </p>
        <div className="cta-buttons">
          <a
            href="https://www.linkedin.com/in/vishnupriya-a-022036358/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Vishnupriya210601/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="card fade-in">
        <h2>About</h2>
        <ul>
          <li>Banking & Financial Services domain experience</li>
          <li>React.js expertise</li>
          <li>Performance optimization & scalable UI development</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="card slide-up">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "React.js",
            "Redux Toolkit",
            "React Hooks",
            "Context API",
            "JavaScript ES6+",
            "HTML5 / CSS3",
            "API Integration",
            "Git / GitHub",
            "Jenkins / CI-CD",
            "Responsive UI / Accessibility",
          ].map((skill) => (
            <div key={skill} className="skill bounce">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="card fade-in">
        <h2>Experience</h2>
        <h3>Cognizant (2022–Present)</h3>
        <p>US Bank Project</p>
        <ul>
          <li>Developed SEO-optimized React apps with reusable components</li>
          <li>Integrated REST & GraphQL APIs with Apollo Client</li>
          <li>Improved performance by 20% via optimization & lazy loading</li>
          <li>Implemented unit testing with Jest & React Testing Library</li>
        </ul>
      </section>

      {/* Achievements & Certifications */}
      <section className="card slide-up">
        <h2>Achievements & Certifications</h2>
        <ul>
          <li>🏆 R&R award from US Bank Client</li>
          <li>📜 Udemy certifications in React, Redux, JavaScript & TypeScript</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="card fade-in">
        <h2>Education</h2>
        <p>Kongu Engineering College — B.E ECE | CGPA 8.84</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Vishnupriya Portfolio
      </footer>
    </div>
  );
}

export default App;

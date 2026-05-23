import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Vishnupriya A</h1>
        <p className="subtitle">Frontend React Developer | 3.8+ Years Experience</p>
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

      {/* Profile Summary Section */}
      <section className="card fade-in">
        <h2>Profile Summary</h2>
        <p>
          Frontend React developer with 3.8 years of experience, specializing in building responsive and optimized web applications. Working in the Banking and Financial Services (BFSI) domain, creating scalable apps with a focus on performance, secure coding, and seamless API integration.
        </p>
      </section>

      {/* Skills Section */}
      <section className="card slide-up">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "TypeScript",
            "React JS",
            "Redux Toolkit",
            "React Hooks",
            "Context API",
            "GraphQL APIs",
            "Apollo Client",
            "Responsive UI / Accessibility",
          ].map((skill) => (
            <div key={skill} className="skill bounce">{skill}</div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="card slide-up">
        <h2>Tools</h2>
        <div className="tools-grid">
          {[
            "Git",
            "GitHub",
            "Jenkins",
            "CI/CD Pipelines",
            "Azure Pipeline",
            "Visual Studio Code",
            "Postman",
            "SonarQube"
          ].map((tool) => (
            <div key={tool} className="tool bounce">{tool}</div>
          ))}
        </div>
      </section>


      {/* Experience Section */}
      <section className="card fade-in">
        <h2>Experience</h2>
        <h3>Cognizant Technology Solutions (Aug 2022 – Present)</h3>
        <p>US Bank Project | Banking & Financial Services Domain</p>
        <ul>
          <li>Developed SEO-optimized React apps with reusable components</li>
          <li>Managed complex state using Redux Toolkit & Context API</li>
          <li>Integrated REST & GraphQL APIs with Apollo Client</li>
          <li>Improved performance by 20% via optimization & lazy loading</li>
          <li>Implemented unit testing with Jest & React Testing Library (25% defect reduction)</li>
          <li>Built responsive, accessible UIs following WCAG standards</li>
          <li>Collaborated in Agile/Scrum ceremonies and mentored junior developers</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="card fade-in">
        <h2>Education</h2>
        <p>Kongu Engineering College — B.E Electronics & Communication Engineering | CGPA 8.84</p>
      </section>

      {/* Contact Section */}
      <section className="card fade-in">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:vishnupriyaarumugam2106@gmail.com">vishnupriyaarumugam2106@gmail.com</a></p>
        <p>Phone: <a href="tel:+916382602322">+91 6382602322</a></p>
        <p>Location: Chennai, Tamil Nadu</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Vishnupriya Portfolio
      </footer>
    </div>
  );
}

export default App;

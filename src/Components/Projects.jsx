import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio with React and Vite showcasing projects, skills, and contact info.",
    image: "/images/portfolio.png",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    repo: "https://github.com/Beryl-20-Nyauma/my-portfolio-frontend",
    demo: "#"
  },
  {
    title: "Full Stack App",
    description: "A web app integrating a REST API (Python/FastAPI) with a React frontend.",
    image: "/images/fullstack.png",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
    repo: "https://github.com/Beryl-20-Nyauma/fullstack-app",
    demo: "#"
  }
  // Add more as needed
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <img src={proj.image} alt={proj.title} className="project-img" />
          <div className="project-info">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-tags">
              {proj.tech.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={proj.repo} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
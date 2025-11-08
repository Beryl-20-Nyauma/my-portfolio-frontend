import React from 'react';

const tech = [
  { name: "React", icon: "fab fa-react" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Python", icon: "fab fa-python" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "Git", icon: "fab fa-git-alt" },
 { name: "Docker", icon: "/icons/docker.svg" }
];

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title">Tech Stack</h2>
    <div className="skills-grid">
      {tech.map((item, idx) => (
        <div className="skill-card" key={idx}>
          <i className={`${item.icon} skill-icon`} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
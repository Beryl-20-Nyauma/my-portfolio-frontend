import React from 'react';

const experience = [
  {
    company: "Twiga One Foods",
    role: "Software Engineer Intern",
    period: "2025 March - 2025 September",
    description: "Building modern, performant UIs using React and TypeScript. Collaborated with backend teams to deliver robust scalable software."
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    description: "Worked with various clients, developing full-stack apps with Python, React, and cloud solutions."
  }
];

const Experience = () => (
  <section id="experience" className="section">
    <h2 className="section-title">Experience</h2>
    {experience.map((exp, idx) => (
      <div className="card exp-card" key={idx}>
        <div className="exp-header">
          <span className="exp-role">{exp.role}</span>
          <span className="exp-period">{exp.period}</span>
        </div>
        <span className="exp-company">{exp.company}</span>
        <p>{exp.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;
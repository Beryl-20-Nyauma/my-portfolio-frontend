import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="home-section"
  >
    <h1>
      <span className="accent">Beryl Nyauma</span>
    </h1>
    <p>
      Software Engineer & Full Stack Developer <br />
      <span style={{ opacity: 0.8 }}>React • TypeScript • Python</span>
    </p>
    <div className="hero-buttons">
      <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      <a className="primary-btn" href="/projects">My Projects</a>
    </div>
  </motion.section>
);

export default Home;
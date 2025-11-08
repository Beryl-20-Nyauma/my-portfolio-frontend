import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

// AnimatePresence works best if you make each route change a "unique key"
// Here we're using location.pathname for simplicity
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <AnimatePresence mode="wait">
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
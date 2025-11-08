import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const layoutVariants = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Layout = ({ children }) => (
  <>
    <Navbar />
    <motion.main
      className="main-content"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={layoutVariants}
    >
      {children}
    </motion.main>
    <Footer />
  </>
);

export default Layout;
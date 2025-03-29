import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Intro.css"; // Import CSS

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide intro after 3 sec
    }, 3000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onFinish]);

  return (
    <motion.div 
      className="introContainer"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1 
        className="introHeading"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Chasang<span className="primary-color">.dev</span>
      </motion.h1>
    </motion.div>
  );
};

export default Intro;

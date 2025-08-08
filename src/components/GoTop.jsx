import React, { useState, useEffect } from 'react';
import { LiaAngleUpSolid } from "react-icons/lia";
import { motion } from 'framer-motion';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 170) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Adding and removing the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Framer Motion animation variants
  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onClick={scrollToTop}
          variants={buttonVariants}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 50,
            cursor: 'pointer',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.3)'
          }}
        >
          <LiaAngleUpSolid size={20} />
        </motion.button>
      )}
    </>
  );
}

export default GoTop;
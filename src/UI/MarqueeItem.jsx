import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Helper function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MarqueeItem = ({ texts, from, to }) => {
  // Memoize text elements to prevent unnecessary re-renders
  const textElements = useMemo(
    () =>
      texts.map((text, index) => (
        <span
          className="text-2xl font-bold px-4 transition duration-300 ease-in-out transform hover:scale-125 md:hover:scale-150 hover:shadow-cyan-600"
          style={{ color: getRandomColor() }}
          key={index}
        >
          {text}
        </span>
      )),
    [texts]
  );

  // Framer Motion variants for animation
  const marqueeVariants = {
    animate: {
      x: [from, to],
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      {/* Single motion.div with repeated text elements */}
      <motion.div
        className="flex flex-shrink-0"
        variants={marqueeVariants}
        animate="animate"
      >
        {textElements}
        {textElements} {/* Repeat the text elements to ensure continuous scrolling */}
      </motion.div>
    </div>
  );
};

// Adding prop-types for validation
MarqueeItem.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MarqueeItem;

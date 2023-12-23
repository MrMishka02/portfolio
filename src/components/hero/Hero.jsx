import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerchildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MIKHEIL GOGIA</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants} className="contactMe">
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

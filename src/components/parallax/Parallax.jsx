import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const variants = {
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
    <div className="parallax" ref={ref}>
      <div className="captions">
        <motion.h1 style={{ y: ytext }}>
          Create a beautiful, functional and responsive websites
        </motion.h1>
        <motion.h2 style={{ y: ytext }}>
          For my latest works scroll down
        </motion.h2>
        <motion.img
          src="./scroll.png"
          alt=""
          className="scroll"
          variants={variants}
          animate="scrollButton"
        />
      </div>
      <motion.div className="stars"></motion.div>
      <motion.div className="projectImages">
        <img src="tablet.png" alt="Tablet image" className="tablet" />
        <img
          src="laptopMobile.png"
          alt="Laptop & Mobile image"
          className="laptopMobile"
        />
        <img src="laptop.png" alt="Laptop image" className="laptop" />
      </motion.div>
    </div>
  );
};

export default Parallax;

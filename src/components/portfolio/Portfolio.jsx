import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Redberry PCfy (MERN Stack)",
    img: "pcfy.jpg",
    description:
      "Responsive multipage platform in which he describes which employee has been given which laptop. We should also be able to describe the details of the laptop as well. Built with ReactJS, Tailwind CSS, also was used React Redux and Form Validation.",
  },
  {
    id: 2,
    title: "Book Shop",
    img: "bookshop.jpg",
    description:
      "Online shop to buy book with delivery to user's home. Was used DOM API, HTML, CSS, Javascript, Json. The project was created at an early stage of learning.",
  },
  {
    id: 3,
    title: "Online Zoo",
    img: "onlinezoo.jpg",
    description:
      "Responsive multipage platform that contains information about animals from various zoos. Was used Figma design, PerfectPixel for Google Chrome, HTML, CSS and Javascript. The project was created at an early stage of learning.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

import "./about.scss";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

const About = () => {
  const saveFile = () => {
    saveAs(
      "https://onedrive.live.com/?authkey=%21AIehKNyH652FQB4&id=D4509D34B38FB0EB%213362&cid=D4509D34B38FB0EB&parId=root&parQt=sharedby&o=OneUp",
      "Mikheil Gogia - CV.pdf"
    );
  };
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          className="leftDiv"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <h4>ABOUT ME:</h4>
            <p>
              As a dedicated and motivated full-stack developer, I have honed my
              skills and expertise over the past 1.5 years to become a valuable
              asset in the world of web and software development. My passion for
              coding and problem-solving, combined with my commitment to
              continuous learning, has allowed me to excel in both front-end and
              back-end development, creating seamless and innovative digital
              experiences.
            </p>
          </div>
          <div>
            <h4>WORK EXPERIENCE:</h4>
            <ul>
              <li>IT Support – JSC Silknet, 2012 – present.</li>
              <li>
                Billing software developer – Desktop app was created in 2008 for
                United Telecom of Georgia with Microsoft Access and Visual
                Basic.
              </li>
              <li>IT Support – United Telecom of Georgia, 2007 – 2012.</li>
            </ul>
          </div>
          <div>
            <h4>EDUCATION:</h4>
            <ul>
              <li>
                Web development and Computer Science. Self-lerning and skill
                development (online courses, webinars and tutorials, reading and
                research, online communities, personal projects). 2002 - present
              </li>
              <li>
                Bachelor's academic Degree with Major in Computer Technologies.
                Akaki Tsereteli State University, Kutaisi, Georgia 2002 - 2006
              </li>
            </ul>
          </div>
          <div>
            <h4>LANGUAGES:</h4>
            <ul>
              <li>Georgian – Native</li>
              <li>English – B2</li>
              <li>Russian – B2</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="rightDiv"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="imageContainer">
            <img src="mg.png" alt="" />
          </div>
          <button onClick={saveFile}>
            <a href=""></a>Download CV
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

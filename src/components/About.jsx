import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc/SectionWrapper"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-full w-[250px]"> {/*xs:w-[250px]*/}
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1.5, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Highly motivated Full Stack Web Developer with a passion for continuous
        learning and a growth mindset. Adept in both front-end and back-end
        development, bringing a strong foundation in programming languages (C,
        C++) and web technologies (Node.js, MySQL, HTML, CSS, JavaScript,
        jQuery, MongoDB, Express.js, React.js) to any project. Possesses a
        strong understanding of version control systems, utilizing Git and
        GitHub for efficient collaboration.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;

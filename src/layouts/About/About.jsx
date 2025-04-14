import "./About.css";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section className="About" id="about">
      <div className="overlay"></div>
      <div className="contentAbout">
        <motion.article
          className="photoContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        ></motion.article>
        <motion.article
          className="aboutText"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ amount: 0.5 }}
        >
          <h2 className="aboutTitle">
            We transform your ideas in digital solutions
          </h2>
          <p className="aboutParagraph">
            We were born with the idea of simplifying access to technology for
            entrepreneurs, businesses, and personal projects. We are a team
            passionate about creating functional, aesthetic, and sustainable
            digital experiences.
          </p>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500}
            className="ctaButton"  
          >
            Let’s work together
          </ScrollLink>
        </motion.article>
      </div>
    </section>
  );
}

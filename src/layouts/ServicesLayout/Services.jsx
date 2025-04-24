import "./Services.css";
import ServiceCard from "../../components/serviceCard/ServiceCard";
("../../components/serviceCard/ServiceCard");
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "We understand your vision",
    },
    {
      icon: "💻",
      title: "Web Development",
      desc: "We build it",
    },
    {
      icon: "🔧",
      title: "Web Maintainance",
      desc: "We assure the functionality",
    },
  ];

  return (
    <section className="services" id="services">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="servicesH2"
      >
        How do we work?
      </motion.h2>
      <ServiceCard services={services} />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="servicesP"
      >
        Our process is centered in transforming your vision in a functional, atractive, 
        and easy to use Website.
      </motion.p>
    </section>
  );
}

import { motion } from "framer-motion";
import "./ServiceCard.css";
import { useState } from "react";

export default function ServiceCard({ services }) {

    const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="service-stepper-container">
      <div className="line" />
      {services.map((service, index) => (
        <motion.div
          key={index}
          className={`step ${activeStep === index ? 'active' : ''}`}
          onClick={() => setActiveStep(index)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="step-icon">{service.icon}</div>
          <h3 className="step-title">{service.title}</h3>
          <p className="step-desc">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

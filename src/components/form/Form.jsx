// ...tus imports
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import "./Form.css";
import { Link as ScrollLink } from "react-scroll";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const formView = useInView(sectionRef, { once: false, margin: "-100px" });

  const textRef = useRef(null); // 👈 Nuevo ref para animar h2 y p
  const textInView = useInView(textRef, { once: false, margin: "-100px" });

  const fieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus("Mensaje enviado con éxito");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Error al enviar el mensaje");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-imageForm-container">
      <div className="contactForm-image" ref={textRef}>
        <motion.h2
          className="contactForm-h2"
          variants={fadeUp}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
        >
          Want to reach out?
        </motion.h2>
        <motion.p
          className="contactForm-p"
          variants={fadeUp}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          Fill the form and let us know about your ideas!
          <br />
          <br />
          Even if you're just curious, We'll read you!
          <br />
          <br />
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="ctaButton"
            offset={-80}
            id="ctaButtonForm"
          >
            Return to Home
          </ScrollLink>
        </motion.p>
      </div>

      <motion.div
        ref={sectionRef}
        className="contact-form-container"
        initial="hidden"
        animate={formView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="contacth2">Contact Us!</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              className="input-group"
              key={field}
              custom={i}
              variants={fieldVariants}
              initial="hidden"
              animate={formView ? "visible" : "hidden"}
            >
              <label htmlFor={field}>
                {field === "name"
                  ? "Name"
                  : field === "email"
                  ? "Email"
                  : "Message"}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="buttonForm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>

          {status && (
            <motion.p
              className="p-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>

      <div className="contactForm-image" id="contactForm-bottomImage">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="ctaButton"
          offset={-80}
          id="ctaButtonForm"
        >
          Return to Home
        </ScrollLink>
      </div>
    </div>
  );
}

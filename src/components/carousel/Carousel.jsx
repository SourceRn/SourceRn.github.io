import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";
import websiteBasico from "../../assets/carousel_images/libreriaLectores/websiteBasico.webp";
import ecoPlatos from "../../assets/carousel_images/ecoplatos/ecoplatos1.webp";
import matexanii from "../../assets/carousel_images/matexanii/matexanii4.webp";
import LinkButton from "../linkButton/LinkButton";

const projects = [
  {
    title: "Libreria Lectores Letrados",
    image: websiteBasico,
    websiteLink: "https://website-basico-beryl.vercel.app/",
    description: `
        Landing page for a fictional library with 3 sections, basic SEO, UX/UI design.
    `
  },
  {
    title: "EcoPlatos",
    image: ecoPlatos,
    websiteLink: "https://eco-platos.vercel.app/",
    description: `
        Eco-friendly tableware website for a brand 
       promoting sustainability and environmental care.
       (¡Still working on it!)
    `
  },
  {
    title: "MATEXANII",
    image: matexanii,
    websiteLink: "https://exani-ii.vercel.app/",
    description: `
        University-prep platform to help high schoolers prepare 
        for exams required for university admission.
    `
  },
];

export default function Carousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + projects.length) % projects.length;
      return [newIndex, newDirection];
    });
  };

  const next = () => paginate(1);
  const prev = () => paginate(-1);

  return (
    <section className="carousel-container" id="home">

<div
    className="background-fixed"
    style={{
      backgroundImage: `url(${projects[index].image})`
    }}
  ></div>

      <AnimatePresence mode="wait">
        <motion.article
          key={projects[index].title}
          className="project-slide"
          initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          
          drag={window.innerWidth < 860 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) {
              paginate(1);
            } else if (info.offset.x > 100) {
              paginate(-1);
            }
          }}
        >
          <div className="overlay" />
          <div className="project-info">
            <h2>{projects[index].description}</h2>
            <LinkButton
              websiteLink={projects[index].websiteLink}
              text={"Watch It!"}
            />
          </div>
        </motion.article>
      </AnimatePresence>

      <button className="nav-button left" onClick={prev}>
        &lt;
      </button>

      <button className="nav-button right" onClick={next}>
        &gt;
      </button>

      <div className="carousel-indicators">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`indicator-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

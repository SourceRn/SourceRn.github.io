import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <span className="logo">R I</span>
      <ul className="desktop-nav-list">
        {["home", "services", "about", "contact"].map((section) => (
          <li className="desktop-nav-element" key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <span className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "✖" : "☰"}
          </motion.span>
        </AnimatePresence>
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="mobile-nav-list"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {["home", "services", "about", "contact"].map((section) => (
              <li className="mobile-nav-element" key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}


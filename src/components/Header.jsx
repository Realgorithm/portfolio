import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <a
          href="#home"
          className={`header__nav__link ${
            activeSection === "home" ? "active" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`header__nav__link ${
            activeSection === "projects" ? "active" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`header__nav__link ${
            activeSection === "skills" ? "active" : ""
          }`}
        >
          Skills
        </a>
        <a
          href="#about"
          className={`header__nav__link ${
            activeSection === "about" ? "active" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`header__nav__link ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

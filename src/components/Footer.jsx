import React from "react";
import { ReactComponent as GithubIcon } from "../assets/images/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/images/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../assets/images/icons/email.svg";
// import "../assets/styles/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">Tabish Hussain</div>
        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__social">
          <a
            href="https://github.com/Realgorithm"
            className="footer__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tabish-hussain-8b0a1b1b2/"
            className="footer__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:hussaintabish0618@gmail.com?subject=${encodeURIComponent(
              "Opportunity Inquiry"
            )}&body=${encodeURIComponent(
              "Hello Tabish,\n\nI came across your portfolio and would like to discuss..."
            )}`}
            className="footer__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Tabish Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

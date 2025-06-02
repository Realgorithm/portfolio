// components/Hero.jsx
import { motion } from "framer-motion";
import Avatar from '../assets/images/avatar.jpg'; // Import your avatar image
// import '../assets/styles/components/hero.scss'; // Import your CSS file for styling

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
      id="home"
    >
      <img src={Avatar} alt="Tabish Hussain" className="hero__avatar" loading="lazy"/>
      <h1 className="hero__title">Tabish Hussain</h1>
      <h2 className="hero__subtitle">Front-End Developer</h2>
      <p>Building responsive, user-friendly web applications.</p>
      <a href="#projects" className="hero__cta">
        View My Work
      </a>
    </motion.section>
  );
};
export default Hero;

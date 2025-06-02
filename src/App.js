import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./assets/styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero id="home" />
        <Projects id="projects" />
        <Skills />
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;

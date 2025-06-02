// // components/About.jsx
// const About = () => {
//   return (
//     <section id="about">
//       <h2>About Me</h2>
//       <p>
//         I'm a front-end developer passionate about building responsive,
//         accessible web applications. I love solving problems with code and
//         continuously learning new technologies.
//       </p>
//     </section>
//   );
// };
// export default About;

import React from "react";
// import "../assets/styles/components/_about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <p>
            I'm a front-end developer passionate about building responsive,
            accessible web applications. I love turning ideas into code and
            constantly learning new technologies.
          </p>
        </div>
        <div className="about__skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>
    </section>
  );
};

export default About;
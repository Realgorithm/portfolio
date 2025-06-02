// components/Skills.jsx
const skills = {
  languages: ["HTML5", "CSS3", "JavaScript(ES6+)", "React.js"],
  tools: ["Git", "GitHub", "VS Code"],
  softskills: ["Problem-solving", "Collaboration", "Adaptability"],
  other: ["Responsive Design", "DOM Manipulation", "Basic SEO"],
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__card">
              <h3>{category.toUpperCase()}</h3>
              <ul className="skills__card-item">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;

// components/Projects.jsx
const projects = [
  {
    id: 1,
    title: "Healthcare-Dashboard",
    desc: "Dashboard for healthcare analytics and patient management.",
    tech: "React.js, CSS",
    github: "https://github.com/Realgorithm/healthcare-dashboard",
    demo: "https://healthcare-dashboard-six-kappa.vercel.app/",
    image:
      "https://private-user-images.githubusercontent.com/107784329/450041363-e31c90a1-0ce1-4ada-bbe6-20c85f51b339.png",
  },
  {
    id: 2,
    title: "Text-Hub",
    desc: "Built a text utility website for formatting and analyzing user-input text.",
    tech: "React.js, CSS",
    github: "https://github.com/Realgorithm/Text-Hub",
    demo: "https://texthub-20914.web.app/",
    image:
      "https://user-images.githubusercontent.com/107784329/186419038-d7224462-ef6a-4ffd-8ba0-a5979711f1a3.png",
  },
  {
    id: 3,
    title: "LocalGoods-Tracker",
    desc: "Inventory management app for small vendors. Tracks product stock, profit, and sales data with a responsive UI.",
    tech: "PHP, HTML, CSS, JavaScript",
    github: "https://github.com/Realgorithm/LocalGoods-Tracker",
    demo: "http://shopac.free.nf/",
    image:
      "https://github.com/Realgorithm/LocalGoods-Tracker/raw/main/assets/uploads/dark.png",
  },
  {
    id: 4,
    title: "Kamui – Food Donation App",
    desc: "Created a platform connecting NGOs/restaurants with recipients to reduce food waste.",
    tech: "Kotlin, Firebase",
    github: "https://github.com/Realgorithm/Kamui-Food_Donation_app",
    demo: "#",
    image:
      "https://raw.githubusercontent.com/Realgorithm/Kamui-Food_Donation_app/main/public/screenshot.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">My Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__card-image">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              </div>
              <div className="projects__card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>
                  <strong>Tech:</strong> {project.tech}
                </p>
              </div>
              <div className="projects__card-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

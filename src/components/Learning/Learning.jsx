// import { projectsAside, projectsAside2 } from "../../projects";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const stackList = project.stack;

  return (
    <div className="project-card">
      <div className="projects-name">
        <h4>{project.title}</h4>
        <div className="header-proj-links">
          <a
            href="https://github.com/sulakova-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://dnd-character-generator-gules.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
          </a>{" "}
        </div>
      </div>

      <p>{project.description}</p>
      <ul className="project-stack">
        {stackList.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
      <div className="header-links"></div>
    </div>
  );
}

function Learning() {
  return (
    <section id="learning">
      {/* <div className="container">
        <h2>Развитие и обучение</h2>
        <h3 className="projects-title">Работа с алгоритмами</h3>
        <div className="project-carousel">
          {projectsAside.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h3>Другие технологии</h3>
        <div className="project-carousel">
          {projectsAside2.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default Learning;

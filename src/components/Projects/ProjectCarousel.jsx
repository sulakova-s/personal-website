import { useTranslation } from "react-i18next";
import { projects } from "../../data.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const stackList = project.stack;

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h4>{t(project.titleKey)}</h4> {/* 👈 через t() */}
        <div className="project-card-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <p>{t(project.descriptionKey)}</p> {/* 👈 через t() */}
      <ul className="project-card-stack">
        {stackList.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCarousel() {
  const { t } = useTranslation();
  const visibleProjects = projects.slice(0, 3); // всегда первые 3

  return (
    <div className="project-carousel-wrapper">
      <h3 className="project-carousel-title">{t("projects.other.title")}</h3>
      <div className="project-carousel">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;

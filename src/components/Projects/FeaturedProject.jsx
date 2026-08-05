import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProject } from "../../data";

function FeaturedProject() {
  const { t } = useTranslation();

  return (
    <>
      <span className="featured-project-label">
        {t("projects.featured.label")}
      </span>
      <article className="featured-project">
        <div className="featured-project-card">
          <h3>{t("projects.featured.title")}</h3>

          <h4 className="featured-project-subtitle">
            {t("projects.featured.subtitle")}
          </h4>
          <p className="featured-project-description">
            {t("projects.featured.description")}
          </p>
          <ul className="featured-project-stack">
            {featuredProject.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="featured-project-links">
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={featuredProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
        <div className="app-preview">
          <div className="app-preview-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={featuredProject.image} alt={featuredProject.imageAlt} />
        </div>
      </article>
    </>
  );
}

export default FeaturedProject;
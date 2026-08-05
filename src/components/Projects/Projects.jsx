import { useTranslation } from "react-i18next";
import FeaturedProject from "./FeaturedProject";
import ProjectCarousel from "./ProjectCarousel";
import "./Projects.css";

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <div className="container">
        <h2>{t("projects.title")}</h2>
        <FeaturedProject />
        <ProjectCarousel />
      </div>
    </section>
  );
}

export default Projects;

import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-header">
              <p>01</p>
              <h2>{t("about.title")}</h2>
            </div>

            <div className="about-paragraphs">
              <p>{t("about.intro")}</p>
              <p>{t("about.experience")}</p>
              <p>{t("about.philosophy")}</p>
            </div>
          </div>

          <img src="/me.jpg" alt="Sentyabrina" />
        </div>
      </div>
    </section>
  );
}

export default About;

import { useTranslation } from "react-i18next";
import { heroStack } from "../../data";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  const text = "EXPLORE";

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-slogan">
          <span>
            MAKE THING
            <span className="s-wrapper">
              S
              <span className="hero-comment">
                <p className="hidden">.</p>
                <p>{t("hero.comment.comment1")}</p>
                <p>{t("hero.comment.comment2")}</p>
              </span>
            </span>
          </span>
          WORK
        </div>

        <div className="hero-content">
          <h1>
            {t("hero.greeting")}
            <a className="hero-name">{t("hero.name")}</a>
          </h1>

          <p className="hero-description">{t("hero.description")}</p>

          <ul className="hero-stack">
            {heroStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#projects" className="btn-outline">
              {t("hero.actions.projects")}
            </a>
            <a href="/cv.pdf" className="btn-underline" download>
              {t("hero.actions.resume")}
            </a>
          </div>
        </div>

        <div className="scroll">
          {text.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>

        <div className="arrow">
          <div className="arrow-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useTranslation } from "react-i18next";
import { PROFILE_LINKS } from "../../data";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>{t("contact.title")}</h2>
        </div>

        <div className="contact-content">
          <p className="contact-text">{t("contact.text")}</p>

          <div className="contact-links">
            <a
              href="mailto:sentyabrinasulakova@gmail.com"
              className="contact-item"
            >
              <FaEnvelope />
              sentyabrinasulakova@gmail.com
            </a>
            <a
              href={PROFILE_LINKS.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

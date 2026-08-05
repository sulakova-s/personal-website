import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import ExternalLink from "../../shared/ExternalLink";
import { PROFILE_LINKS, navigation } from "../../data";
import "./Header.css";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header-container">
        <a href="#hero" className="logo">
          sulakova %
        </a>

        <nav className="header-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {t(`nav.${item.label}`)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <ExternalLink href={PROFILE_LINKS.github.href} ariaLabel="GitHub">
            <FaGithub />
          </ExternalLink>
          <ExternalLink
            href={PROFILE_LINKS.hh.href}
            ariaLabel="HH.ru"
            className="hh-icon"
          >
            HH
          </ExternalLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-btn"
      aria-label="Switch language"
    >
      <FaGlobe />
    </button>
  );
}

export default LanguageSwitcher;

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(undefined);

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en" || stored === "es") return stored;
  
  // Detect browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith("es")) return "es";
  
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((current) => (current === "en" ? "es" : "en"));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

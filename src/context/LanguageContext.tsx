import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  dir: Direction;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (keyPath: string, fallback?: string) => any;
}

const translations: Record<Language, any> = {
  en: enTranslations,
  ar: arTranslations,
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  dir: "ltr",
  isRtl: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (keyPath: string) => keyPath,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "ar" || saved === "en") return saved;
    }
    return "en";
  });

  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const isRtl = dir === "rtl";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", language);
      if (isRtl) {
        document.documentElement.classList.add("rtl-mode");
      } else {
        document.documentElement.classList.remove("rtl-mode");
      }
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("portfolio_lang", language);
    }
  }, [language, dir, isRtl]);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (keyPath: string, fallback?: string): any => {
      const keys = keyPath.split(".");
      
      // Try active language
      let current: any = translations[language];
      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          current = undefined;
          break;
        }
      }

      if (current !== undefined) return current;

      // Fallback to English
      let fallbackCurrent: any = translations.en;
      for (const key of keys) {
        if (fallbackCurrent && typeof fallbackCurrent === "object" && key in fallbackCurrent) {
          fallbackCurrent = fallbackCurrent[key];
        } else {
          fallbackCurrent = undefined;
          break;
        }
      }

      if (fallbackCurrent !== undefined) return fallbackCurrent;

      return fallback !== undefined ? fallback : keyPath;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRtl,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

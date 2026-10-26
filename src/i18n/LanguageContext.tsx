"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, DictionaryKey } from "./dictionaries";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: DictionaryKey) => string;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang === "id" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore storage access issues
    }

    // Snappy initial loading timer (1.3s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    // Scroll to top
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    // Show loading
    setIsLoading(true);

    setTimeout(() => {
      setLanguageState(lang);
      try {
        localStorage.setItem("language", lang);
      } catch {
        // Ignore storage access issues
      }
      
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }, 300);
  };

  const t = (key: DictionaryKey): string => {
    return dictionaries[language]?.[key] || dictionaries["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading, setIsLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

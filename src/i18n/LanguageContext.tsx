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
    // On mount, check if there's a saved language
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "id" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
    
    // Initial loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Show loading
    setIsLoading(true);

    // After a slight delay to allow smooth scrolling and preloader to appear
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem("language", lang);
      
      // Hide loading after a bit
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, 500);
  };

  const t = (key: DictionaryKey): string => {
    return dictionaries[language][key] || dictionaries["en"][key] || key;
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

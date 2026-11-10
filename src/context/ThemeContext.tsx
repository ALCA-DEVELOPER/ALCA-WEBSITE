"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const { setIsLoading } = useLanguage();

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        document.documentElement.classList.toggle("light", savedTheme === "light");
      } else {
        // Default to light mode as requested by user
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Storage access fallback
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return;

    // Show deliberate, smooth loading transition so the whole website cleanly reloads into the new mode
    setIsLoading(true);

    setTimeout(() => {
      setThemeState(newTheme);
      try {
        localStorage.setItem("theme", newTheme);
      } catch {
        // Ignore
      }
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.toggle("light", newTheme === "light");
      }

      // Smooth completion
      setTimeout(() => {
        setIsLoading(false);
      }, 1150);
    }, 300);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

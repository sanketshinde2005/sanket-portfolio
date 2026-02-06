"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "aurora" | "royal" | "original" | "mint";
export type Mode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("aurora");
  const [mode, setModeState] = useState<Mode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial load from local storage
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedMode = localStorage.getItem("mode") as Mode;

    if (savedTheme) setThemeState(savedTheme);
    if (savedMode) setModeState(savedMode);
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Persist to local storage
    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);

    // Update document attributes
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-mode", mode);
  }, [theme, mode, mounted]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  const setMode = (newMode: Mode) => setModeState(newMode);
  const toggleMode = () => setModeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
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

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";

type Theme = "aurora" | "royal" | "original" | "mint";
type Mode = "light" | "dark";

export default function ThemeController() {
  const [theme, setTheme] = useState<Theme>("aurora");
  const [mode, setMode] = useState<Mode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial load from local storage
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedMode = localStorage.getItem("mode") as Mode;

    if (savedTheme) setTheme(savedTheme);
    if (savedMode) setMode(savedMode);
    
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

  // Avoid hydration mismatch
  if (!mounted) return null;

  const getThemeLabel = (t: Theme) => {
    switch (t) {
      case "aurora": return "Aurora";
      case "royal": return "Royal";
      case "original": return "Professional";
      case "mint": return "Neo Mint";
      default: return t;
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Theme Selector */}
      <div className="relative group">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface text-text hover:bg-card transition-colors border border-border"
          aria-label="Select Theme"
        >
          <Palette className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium hidden sm:inline">
            {getThemeLabel(theme)}
          </span>
        </button>

        {/* Dropdown */}
        <div className="absolute right-0 mt-2 w-40 py-2 rounded-lg bg-surface border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <button
            onClick={() => setTheme("aurora")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-card transition-colors ${
              theme === "aurora" ? "text-primary" : "text-text"
            }`}
          >
            Aurora
          </button>
          <button
            onClick={() => setTheme("royal")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-card transition-colors ${
              theme === "royal" ? "text-primary" : "text-text"
            }`}
          >
            Royal
          </button>
          <button
            onClick={() => setTheme("original")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-card transition-colors ${
              theme === "original" ? "text-primary" : "text-text"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setTheme("mint")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-card transition-colors ${
              theme === "mint" ? "text-primary" : "text-text"
            }`}
          >
            Neo Mint
          </button>
        </div>
      </div>

      {/* Mode Toggle */}
      <button
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        className="p-2 rounded-lg bg-surface text-text hover:bg-card transition-colors border border-border hover:text-primary"
        aria-label="Toggle Dark Mode"
      >
        {mode === "dark" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

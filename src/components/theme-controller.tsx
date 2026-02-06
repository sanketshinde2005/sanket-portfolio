"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";

type Theme = "aurora" | "royal" | "original" | "mint";
type Mode = "light" | "dark";

interface ThemeControllerProps {
  variant?: "full" | "theme-only" | "mode-only";
  className?: string;
  dropdownSide?: "bottom" | "right";
  dropdownClassName?: string;
  showVerticalLabel?: boolean;
  hideLabel?: boolean;
  buttonSize?: "sm" | "md" | "lg";
}

export default function ThemeController({ 
  variant = "full", 
  className = "", 
  dropdownSide = "bottom",
  dropdownClassName = "",
  showVerticalLabel = false,
  hideLabel = false,
  buttonSize = "md"
}: ThemeControllerProps) {
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
      case "mint": return "NeoMint";
      default: return t;
    }
  };

  const themes: Theme[] = ["aurora", "royal", "original", "mint"];

  const dropdownStyles = dropdownSide === "right" 
    ? "left-full ml-3 top-1/2 -translate-y-1/2" 
    : "right-0 bottom-full mb-2 lg:bottom-auto lg:top-full lg:mt-2";

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-11 h-11"
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Theme Selector */}
      {(variant === "full" || variant === "theme-only") && (
        <div className="relative group flex flex-col items-center gap-4">
          {showVerticalLabel && (
            <span 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              {getThemeLabel(theme)}
            </span>
          )}
          
          <div className="relative">
            <button
              className={`flex items-center justify-center rounded-lg bg-surface text-text hover:bg-card transition-colors border border-border ${hideLabel ? sizeClasses[buttonSize] : 'gap-2 px-3 py-2'}`}
              aria-label="Select Theme"
            >
              <Palette className="w-4 h-4 text-primary" />
              {!hideLabel && (
                <span className="text-sm font-medium hidden sm:inline">
                  {getThemeLabel(theme)}
                </span>
              )}
            </button>

            {/* Dropdown */}
            <div className={`absolute py-2 rounded-lg bg-surface border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-40 ${dropdownStyles} ${dropdownClassName}`}>
              {themes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-card transition-colors ${
                    theme === t ? "text-primary" : "text-text"
                  }`}
                >
                  {getThemeLabel(t)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mode Toggle */}
      {(variant === "full" || variant === "mode-only") && (
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`flex items-center justify-center rounded-lg bg-surface text-text hover:bg-card transition-colors border border-border hover:text-primary ${sizeClasses[buttonSize]}`}
          aria-label="Toggle Dark Mode"
        >
          {mode === "dark" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] p-4 rounded-2xl bg-surface/80 backdrop-blur-md border border-border shadow-2xl text-primary transition-all duration-500 hover:scale-110 hover:bg-primary hover:text-bg group ${
        isVisible 
          ? "translate-y-0 opacity-100 visible" 
          : "translate-y-10 opacity-0 invisible"
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-text text-bg text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Back to Top
      </span>
    </button>
  );
}

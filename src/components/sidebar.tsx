"use client";

import { FileText } from "lucide-react";
import ThemeController from "./theme-controller";

export default function Sidebar() {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-3 p-2 bg-surface/70 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl w-[52px] min-h-fit transition-all duration-300 hover:border-primary/30 group/sidebar">
      <style jsx global>{`
        @media (max-height: 700px) {
          aside.group\\/sidebar {
            display: none !important;
          }
        }
      `}</style>

      {/* Resume Download */}
      <div className="relative group/item">
        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="View Resume"
        >
          <FileText className="w-5 h-5" />
        </a>
        <div className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-md text-text text-xs font-bold border border-border/50 shadow-xl opacity-0 invisible -translate-x-3 group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 transition-all duration-300 whitespace-nowrap z-[110] pointer-events-none">
          View Resume
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-surface/90" />
        </div>
      </div>

      <div className="w-6 h-px bg-border/30 mx-auto" />

      {/* Theme Selector Only */}
      <div className="relative">
        <ThemeController 
          variant="theme-only" 
          className="!gap-6 flex-col" 
          dropdownSide="right"
          showVerticalLabel={true}
          hideLabel={true}
          buttonSize="lg"
        />
      </div>
    </aside>
  );
}

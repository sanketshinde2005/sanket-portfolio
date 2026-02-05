"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  GraduationCap,
  Briefcase,
  Code,
  Rocket,
  Award,
  Trophy,
  Users,
} from "lucide-react";
import ThemeController from "./theme-controller";

const navigation = [
  { id: "home", name: "Home", href: "#home", icon: Home },
  {
    id: "education",
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    id: "experience",
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  { id: "skills", name: "Skills", href: "#skills", icon: Code },
  { id: "projects", name: "Projects", href: "#projects", icon: Rocket },
  {
    id: "certificates",
    name: "Certificates",
    href: "#certificates",
    icon: Award,
  },
  {
    id: "achievements",
    name: "Achievements",
    href: "#achievements",
    icon: Trophy,
  },
  {
    id: "extra-curricular",
    name: "Activities",
    href: "#extra-curricular",
    icon: Users,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    
    // Offset for fixed navbar
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg border border-primary/20 transition-transform group-hover:scale-110">
                SS
              </div>
              <span className="text-sm font-medium text-text tracking-wide group-hover:text-primary transition-colors">
                Sanket Shinde
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1 sm:gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/15 font-bold shadow-sm ring-1 ring-primary/20"
                        : "text-muted font-medium hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted group-hover:text-primary"}`} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ThemeController />
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-muted hover:bg-card focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-border rounded-b-xl shadow-xl max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-bg"
                        : "text-muted hover:bg-card hover:text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-4 mt-4 border-t border-border">
                <div className="flex justify-center">
                  <ThemeController />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

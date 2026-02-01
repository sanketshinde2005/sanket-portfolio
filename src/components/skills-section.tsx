"use client";

import { Code, Cloud, Database, Cpu, Palette, Server } from "lucide-react";
import TechStackIcons from "./tech-stack-icons";
import SkillsGlobe from "./skills-globe";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "blue",
    skills: [
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Frontend Development",
    icon: <Palette className="w-6 h-6" />,
    color: "purple",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Bootstrap",
      "DaisyUI",
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: <Server className="w-6 h-6" />,
    color: "green",
    skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "FastAPI"],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Cpu className="w-6 h-6" />,
    color: "pink",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Transformers",
      "LLMs",
      "Streamlit",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    color: "orange",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Helm",
      "GCP",
      "Azure",
      "Linux",
    ],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-6 h-6" />,
    color: "indigo",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Slack",
      "NPM",
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="py-24 sm:py-32 bg-surface/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A comprehensive collection of tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="soft-card rounded-3xl p-6 hover-lift transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    category.color === "blue"
                      ? "bg-primary/10 text-primary border-primary/20"
                      : category.color === "purple"
                        ? "bg-secondary/10 text-secondary border-secondary/20"
                        : category.color === "green"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : category.color === "pink"
                            ? "bg-pink-500/10 text-pink-500 border-pink-500/20"
                            : category.color === "orange"
                              ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                              : "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
                  } border`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              <TechStackIcons
                technologies={category.skills}
                size={20}
                showNames={true}
                className="justify-center"
              />
            </div>
          ))}
        </div>

        {/* Additional Tech Stack in a grid layout */}
        <div className="mt-20 hidden md:block">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4">
              Complete Tech Stack Overview
            </h3>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Organized by categories as per industry standards
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Interactive 3D Globe - Comprehensive Showcase */}
            <div className="lg:w-5/12 order-2 lg:order-1">
              <SkillsGlobe
                technologies={[
                  "Java",
                  "C++",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "SQL",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Ant Design",
                  "Bootstrap",
                  "DaisyUI",
                  "Spring Boot",
                  "Node.js",
                  "Express.js",
                  "Flask",
                  "NumPy",
                  "Pandas",
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-learn",
                  "OpenCV",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "GCP",
                  "Azure",
                  "Jenkins",
                  "Terraform",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Git",
                  "Figma",
                  "VS Code",
                  "Postman",
                ]}
              />
            </div>

            {/* Categorized Lists */}
            <div className="flex-1 lg:w-7/12 order-1 lg:order-2">
              <div className="soft-card rounded-3xl p-6 sm:p-8 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5" /> Programming & DSA
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "Java",
                        "C++",
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "SQL",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5" /> Frontend Tech
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "React",
                        "Next.js",
                        "Tailwind CSS",
                        "Ant Design",
                        "Bootstrap",
                        "DaisyUI",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
                      <Server className="w-5 h-5" /> Backend Tech
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "Spring Boot",
                        "Node.js",
                        "Express.js",
                        "Flask",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-pink-500 mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5" /> AI/ML
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "NumPy",
                        "Pandas",
                        "TensorFlow",
                        "PyTorch",
                        "Scikit-learn",
                        "OpenCV",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-orange-500 mb-4 flex items-center gap-2">
                      <Cloud className="w-5 h-5" /> DevOps & Cloud
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "Docker",
                        "Kubernetes",
                        "AWS",
                        "GCP",
                        "Azure",
                        "Jenkins",
                        "Terraform",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-indigo-500 mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5" /> Databases & Tools
                    </h4>
                    <TechStackIcons
                      technologies={[
                        "MongoDB",
                        "PostgreSQL",
                        "MySQL",
                        "Git",
                        "Figma",
                        "VS Code",
                        "Postman",
                      ]}
                      size={18}
                      showNames={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

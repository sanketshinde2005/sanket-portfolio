"use client";

import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSpring,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiMongodb,
  SiSlack,
  SiFigma,
  SiNpm,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiLinux,
  SiGit,
  SiPostman,
  SiTypescript,
  SiHtml5,
  SiGithub,
  SiPrisma,
  SiJupyter,
  SiAnaconda,
  SiFastapi,
  SiDaisyui,
  SiAntdesign,
  SiStreamlit,
  SiHuggingface,
  SiJenkins,
  SiTerraform,
  SiHelm,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCloud } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import { IconBaseProps } from "react-icons";

const techIcons: Record<
  string,
  { icon: React.ComponentType<IconBaseProps>; color: string }
> =
  {
    // Programming Languages
    "C++": { icon: SiCplusplus, color: "#00599C" },
    Java: { icon: FaJava, color: "#007396" },
    JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Python: { icon: SiPython, color: "#3776AB" },
    SQL: { icon: FaDatabase, color: "#4479A1" },
    "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },

    // Frontend
    React: { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
    "Ant Design": { icon: SiAntdesign, color: "#0170FE" },
    DaisyUI: { icon: SiDaisyui, color: "#5A0FC8" },

    // Backend
    "Spring Boot": { icon: SiSpring, color: "#6DB33F" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "Express.js": { icon: SiExpress, color: "#000000" },
    Flask: { icon: SiFlask, color: "#000000" },
    FastAPI: { icon: SiFastapi, color: "#009688" },

    // AI/ML
    TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
    PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
    "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
    Pandas: { icon: SiPandas, color: "#150458" },
    NumPy: { icon: SiNumpy, color: "#013243" },
    OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
    Transformers: { icon: SiHuggingface, color: "#FFD21E" },
    LLMs: { icon: TbBrandOpenai, color: "#412991" },
    Streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
    Jupyter: { icon: SiJupyter, color: "#F37626" },

    // DevOps & Cloud
    AWS: { icon: SiAmazon, color: "#FF9900" },
    Docker: { icon: SiDocker, color: "#2496ED" },
    Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
    Jenkins: { icon: SiJenkins, color: "#D24939" },
    Terraform: { icon: SiTerraform, color: "#7B42BC" },
    Helm: { icon: SiHelm, color: "#0F1689" },
    GCP: { icon: SiGooglecloud, color: "#4285F4" },
    Azure: { icon: FaCloud, color: "#0078D4" },
    Vercel: { icon: SiVercel, color: "#000000" },
    Netlify: { icon: SiNetlify, color: "#00C7B7" },
    Linux: { icon: SiLinux, color: "#FCC624" },

    // Databases
    MySQL: { icon: SiMysql, color: "#4479A1" },
    PostgreSQL: { icon: SiPostgresql, color: "#336791" },
    MongoDB: { icon: SiMongodb, color: "#47A248" },
    Prisma: { icon: SiPrisma, color: "#2D3748" },

    // Tools
    Git: { icon: SiGit, color: "#F05032" },
    GitHub: { icon: SiGithub, color: "#181717" },
    Postman: { icon: SiPostman, color: "#FF6C37" },
    "VS Code": { icon: VscVscode, color: "#007ACC" },
    Figma: { icon: SiFigma, color: "#F24E1E" },
    Slack: { icon: SiSlack, color: "#4A154B" },
    NPM: { icon: SiNpm, color: "#CB3837" },
    Anaconda: { icon: SiAnaconda, color: "#44A833" },
  };

interface TechStackIconsProps {
  technologies: string[];
  size?: number;
  showNames?: boolean;
  className?: string;
}

export default function TechStackIcons({
  technologies,
  size = 24,
  showNames = true,
  className = "",
}: TechStackIconsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {technologies.map((tech) => {
        const techData = techIcons[tech];

        if (!techData) {
          // Fallback for technologies without icons
          return (
            <div
              key={tech}
              className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg border border-border hover:border-primary/50 hover:scale-105 transition-all duration-200"
            >
              <span className="text-text text-sm font-medium">{tech}</span>
            </div>
          );
        }

        const Icon = techData.icon;
        return (
          <div
            key={tech}
            className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg border border-border hover:border-primary/50 hover:scale-105 transition-all duration-200 group cursor-default"
            title={tech}
          >
            <Icon
              size={size}
              color={techData.color}
              className="transition-transform group-hover:scale-110 flex-shrink-0"
            />
            {showNames && (
              <span className="text-text text-sm font-medium">{tech}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

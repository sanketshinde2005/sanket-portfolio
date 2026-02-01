"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/use-media-query";
import TechStackIcons from "./tech-stack-icons";

// Dynamically import the 3D globe with no SSR
const SkillsGlobeDesktop = dynamic(() => import("./skills-globe-desktop"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

interface SkillsGlobeProps {
  technologies: string[];
}

function LoadingFallback() {
  return (
    <div className="relative h-full min-h-[500px] w-full bg-surface/30 rounded-3xl border border-border/50 overflow-hidden flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted animate-pulse">Initializing 3D Environment...</p>
      </div>
    </div>
  );
}

function MobileFallback({ technologies }: { technologies: string[] }) {
  return (
    <div className="relative bg-surface/50 rounded-3xl border border-border p-8 shadow-xl">
      <div className="text-center mb-8">
        <h4 className="text-xl font-bold text-text mb-2">Tech Stack Overview</h4>
        <p className="text-sm text-muted">A comprehensive view of my technical expertise</p>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        <TechStackIcons
          technologies={technologies}
          size={28}
          showNames={true}
          className="justify-center"
        />
      </div>
      <div className="mt-8 pt-6 border-t border-border/50 text-center">
        <p className="text-[10px] text-muted uppercase tracking-widest">
          3D Globe available on Desktop
        </p>
      </div>
    </div>
  );
}

export default function SkillsGlobe({ technologies }: SkillsGlobeProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", false);

  if (!isDesktop) {
    return <MobileFallback technologies={technologies} />;
  }

  return <SkillsGlobeDesktop technologies={technologies} />;
}

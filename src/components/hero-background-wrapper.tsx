"use client";

import { useEffect, useState } from "react";

export default function HeroBackgroundWrapper() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-40 pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-slow delay-500" />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/30 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-secondary/30 rounded-full animate-spin-slow reverse" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-spin-slow delay-300" />
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const HeroBackground3D = dynamic(() => import("@/components/hero-background-3d"), {
  ssr: false,
  loading: () => null,
});

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

  return <HeroBackground3D />;
}

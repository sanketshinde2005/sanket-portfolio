"use client";

import { useEffect } from "react";

export default function PerformanceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Performance optimizations
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Reduce animations when tab is not visible
        document.body.classList.add("reduce-motion");
      } else {
        document.body.classList.remove("reduce-motion");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
}

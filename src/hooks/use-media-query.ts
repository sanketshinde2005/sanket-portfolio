"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect screen size via media queries.
 * Handles SSR by returning a default value until dehydration.
 * 
 * @param query The media query to check (e.g., "(min-width: 1024px)")
 * @param defaultValue Initial value before media query is checked (default: false)
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(defaultValue);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Setup listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  // Return default value during SSR, and actual matches state after hydration
  return isMounted ? matches : defaultValue;
}

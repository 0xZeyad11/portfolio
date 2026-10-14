import { useState, useEffect } from "react";
import type { AppRoute } from "@/types/portfolio";

export function useHashRouter() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    if (typeof window === "undefined") return "home";
    const hash = window.location.hash;
    return hash.startsWith("#/blue-coast") || hash.startsWith("#/bluecoast")
      ? "blue-coast"
      : "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#/blue-coast") || hash.startsWith("#/bluecoast")) {
        setCurrentRoute("blue-coast");
      } else {
        setCurrentRoute("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute, sectionId?: string) => {
    if (route === "blue-coast") {
      window.location.hash = "/blue-coast";
      setCurrentRoute("blue-coast");
    } else {
      window.location.hash = sectionId ? `#${sectionId}` : "#overview";
      setCurrentRoute("home");
    }
  };

  return {
    currentRoute,
    navigateTo,
    isSubpage: currentRoute !== "home",
  };
}

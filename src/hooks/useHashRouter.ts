import { useState, useEffect } from "react";
import type { AppRoute } from "@/types/portfolio";

export function useHashRouter() {
  const parseRoute = (hash: string): AppRoute => {
    if (hash.startsWith("#/blue-coast") || hash.startsWith("#/bluecoast")) {
      return "blue-coast";
    }
    if (hash.startsWith("#/cv") || hash.startsWith("#/resume")) {
      return "cv";
    }
    return "home";
  };

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    if (typeof window === "undefined") return "home";
    return parseRoute(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(parseRoute(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (route: AppRoute, sectionId?: string) => {
    if (route === "blue-coast") {
      window.location.hash = "/blue-coast";
      setCurrentRoute("blue-coast");
    } else if (route === "cv") {
      window.location.hash = "/cv";
      setCurrentRoute("cv");
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

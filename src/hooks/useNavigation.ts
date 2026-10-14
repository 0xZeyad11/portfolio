import { useState } from "react";
import type { SectionId } from "@/types/portfolio";

export function useNavigation(initialSection: SectionId = "overview") {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const navigateToSection = (section: SectionId) => {
    if (activeSection === section) return;
    setIsTransitioning(true);
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return {
    activeSection,
    isTransitioning,
    navigateToSection,
  };
}

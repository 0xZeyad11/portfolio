import React from "react";
import { OverviewSection } from "@/components/sections/overview/OverviewSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";

interface HomePageProps {
  isTransitioning: boolean;
  onNavigateToBlueCoast: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  isTransitioning,
  onNavigateToBlueCoast,
}) => {
  return (
    <main
      className={`w-full pt-20 sm:pt-28 px-4 sm:px-6 md:px-margin-tablet lg:px-margin-desktop py-space-md sm:py-space-lg flex flex-col overflow-hidden transition-all duration-300 ease-out ${
        isTransitioning
          ? "opacity-30 blur-sm grayscale translate-x-4 scale-[0.98]"
          : "opacity-100 blur-0 grayscale-0 translate-x-0 scale-100"
      }`}
    >
      <OverviewSection />
      <ExperienceSection onNavigateToSubpage={onNavigateToBlueCoast} />
      <ProjectsSection />
    </main>
  );
};

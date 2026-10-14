import React from "react";
import { TelemetryHud } from "@/components/layout/TelemetryHud";
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
      className={`w-full pt-28 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg flex flex-col overflow-hidden transition-all duration-300 ease-out ${
        isTransitioning
          ? "opacity-30 blur-sm grayscale translate-x-4 scale-[0.98]"
          : "opacity-100 blur-0 grayscale-0 translate-x-0 scale-100"
      }`}
    >
      <TelemetryHud />
      <OverviewSection />
      <ExperienceSection onNavigateToSubpage={onNavigateToBlueCoast} />
      <ProjectsSection />
    </main>
  );
};

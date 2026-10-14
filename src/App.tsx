import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlitchOverlay } from "@/components/common/GlitchOverlay";
import { Header } from "@/components/layout/Header";
import { HomePage } from "@/pages/HomePage";
import { BlueCoastDetails } from "@/pages/BlueCoastDetails";
import { CvViewerPage } from "@/pages/CvViewerPage";
import { useHashRouter } from "@/hooks/useHashRouter";
import { useNavigation } from "@/hooks/useNavigation";

export const App: React.FC = () => {
  const { currentRoute, navigateTo } = useHashRouter();
  const { activeSection, isTransitioning, navigateToSection } = useNavigation("overview");

  if (currentRoute === "blue-coast") {
    return (
      <TooltipProvider delayDuration={150}>
        <BlueCoastDetails onBack={() => navigateTo("home", "experience")} />
      </TooltipProvider>
    );
  }

  if (currentRoute === "cv") {
    return (
      <TooltipProvider delayDuration={150}>
        <CvViewerPage onBack={() => navigateTo("home", "overview")} />
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider delayDuration={150}>
      <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary selection:text-primary-foreground min-h-screen pb-16">
        <GlitchOverlay isTransitioning={isTransitioning} />
        <Header activeSection={activeSection} onNavigate={navigateToSection} />
        <HomePage
          isTransitioning={isTransitioning}
          onNavigateToBlueCoast={() => navigateTo("blue-coast")}
        />
      </div>
    </TooltipProvider>
  );
};

export default App;

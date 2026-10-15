import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { EmailModalProvider } from "@/context/EmailModalContext";
import { GlitchOverlay } from "@/components/common/GlitchOverlay";
import { CyberCursor } from "@/components/common/CyberCursor";
import { Header } from "@/components/layout/Header";
import { HomePage } from "@/pages/HomePage";
import { BlueCoastDetails } from "@/pages/BlueCoastDetails";
import { CvViewerPage } from "@/pages/CvViewerPage";
import { useHashRouter } from "@/hooks/useHashRouter";
import { useNavigation } from "@/hooks/useNavigation";

export const App: React.FC = () => {
  const { currentRoute, navigateTo } = useHashRouter();
  const { activeSection, isTransitioning, navigateToSection } = useNavigation("overview");

  return (
    <LanguageProvider>
      <TooltipProvider delayDuration={150}>
        <EmailModalProvider>
          <CyberCursor />
      {currentRoute === "blue-coast" ? (
        <BlueCoastDetails onBack={() => navigateTo("home", "experience")} />
      ) : currentRoute === "cv" ? (
        <CvViewerPage onBack={() => navigateTo("home", "overview")} />
      ) : (
        <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary selection:text-primary-foreground min-h-screen pb-16">
          <GlitchOverlay isTransitioning={isTransitioning} />
          <Header activeSection={activeSection} onNavigate={navigateToSection} />
          <HomePage
            isTransitioning={isTransitioning}
            onNavigateToBlueCoast={() => navigateTo("blue-coast")}
          />
        </div>
      )}
        </EmailModalProvider>
      </TooltipProvider>
    </LanguageProvider>
  );
};

export default App;

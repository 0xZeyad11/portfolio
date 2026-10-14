import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAV_ITEMS } from "@/constants/navigation";
import { PROFILE_INFO } from "@/constants/profile";
import type { SectionId } from "@/types/portfolio";

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const currentNav = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-border shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
      <div className="h-20 w-full px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm uppercase font-bold tracking-tight text-primary">
                {PROFILE_INFO.name}
              </span>
              <Badge
                variant="destructive"
                className="font-mono font-bold tracking-widest text-[10px] px-2 py-0.5 uppercase"
              >
                FULLSTACK ENGINEER
              </Badge>
            </div>
            <span className="hidden xl:inline-block font-label-md text-label-md text-secondary-foreground font-mono tracking-widest">
              // STATUS: {PROFILE_INFO.status}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center">
          <Tabs
            value={activeSection}
            onValueChange={(val) => onNavigate(val as SectionId)}
            className="w-auto"
          >
            <TabsList className="bg-surface-container-low border border-border p-1 gap-1">
              {NAV_ITEMS.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="font-label-md text-xs uppercase px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all cursor-pointer"
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </nav>
      </div>

      {/* Dynamic HUD Progress Bar */}
      <div className="h-1 w-full bg-surface-container flex">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: currentNav.progressPercent }}
        ></div>
        <div
          className="h-full bg-secondary-foreground transition-all duration-700 ease-out"
          style={{ width: activeSection === "projects" ? "0%" : "10%" }}
        ></div>
        <div className="h-full bg-surface-container-highest flex-1"></div>
      </div>
    </header>
  );
};

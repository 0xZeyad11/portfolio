import React from "react";

export const TelemetryHud: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-space-xs mb-space-lg">
      <div className="flex items-center justify-between flex-wrap gap-space-sm bg-surface-container-low border border-border px-space-md py-space-xs shadow-md">
        <div className="flex items-center gap-space-sm">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold flex items-center gap-space-xs">
            <span className="w-2 h-2 bg-primary inline-block animate-ping rounded-full"></span>
            SYS.OP: Z.01 // OPERATIVE Overview
          </span>
          <span className="font-label-md text-label-md text-secondary-foreground font-mono font-bold uppercase tracking-wider">
            :: SOFTWARE ENGINEER
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-space-md font-label-sm text-label-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground font-bold">CPU</span>
            <div className="flex gap-[2px]">
              <div className="w-1.5 h-3 bg-secondary-foreground"></div>
              <div className="w-1.5 h-3 bg-secondary-foreground opacity-80 animate-pulse"></div>
              <div className="w-1.5 h-3 bg-secondary-foreground opacity-40"></div>
              <div className="w-1.5 h-3 bg-surface-container-highest"></div>
              <div className="w-1.5 h-3 bg-surface-container-highest"></div>
            </div>
            <span>42%</span>
          </div>
          <span className="text-surface-container-highest">/</span>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">RAM</span>
            <div className="flex gap-[2px]">
              <div className="w-1.5 h-3 bg-primary"></div>
              <div className="w-1.5 h-3 bg-primary"></div>
              <div className="w-1.5 h-3 bg-primary"></div>
              <div className="w-1.5 h-3 bg-primary opacity-60 animate-pulse"></div>
              <div className="w-1.5 h-3 bg-surface-container-highest"></div>
            </div>
            <span>12GB</span>
          </div>
          <span className="text-surface-container-highest">/</span>
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground font-bold">PWR</span>
            <div className="w-7 h-3 border border-secondary-foreground/50 p-[1px] flex gap-[1px]">
              <div className="h-full w-full bg-secondary-foreground"></div>
              <div className="h-full w-full bg-secondary-foreground"></div>
              <div className="h-full w-full bg-secondary-foreground opacity-80 animate-pulse"></div>
            </div>
            <span>94%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

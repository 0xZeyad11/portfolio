import React from "react";
import { useTelemetry } from "@/hooks/useTelemetry";

export const TelemetryHud: React.FC = () => {
  const { cpu, ram, lat, cpuBars, ramBars } = useTelemetry();

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
          {/* CPU */}
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground font-bold">CPU</span>
            <div className="flex gap-[2px] items-end h-3">
              <div
                className="w-1.5 bg-secondary-foreground transition-all duration-500 ease-out"
                style={{ height: `${cpuBars[0]}px` }}
              />
              <div
                className="w-1.5 bg-secondary-foreground transition-all duration-500 ease-out"
                style={{ height: `${cpuBars[1]}px`, opacity: cpu > 45 ? 1 : 0.8 }}
              />
              <div
                className="w-1.5 bg-secondary-foreground transition-all duration-500 ease-out"
                style={{ height: `${cpuBars[2]}px`, opacity: cpu > 35 ? 0.9 : 0.5 }}
              />
              <div
                className="w-1.5 transition-all duration-500 ease-out"
                style={{
                  height: `${cpuBars[3]}px`,
                  backgroundColor: cpu > 55 ? "var(--color-secondary-foreground)" : "var(--color-surface-container-highest)",
                  opacity: cpu > 55 ? 1 : 0.5,
                }}
              />
            </div>
            <span className="tabular-nums min-w-[28px]">{cpu}%</span>
          </div>

          <span className="text-surface-container-highest">/</span>

          {/* RAM */}
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">RAM</span>
            <div className="flex gap-[2px] items-end h-3">
              <div
                className="w-1.5 bg-primary transition-all duration-500 ease-out"
                style={{ height: `${ramBars[0]}px` }}
              />
              <div
                className="w-1.5 bg-primary transition-all duration-500 ease-out"
                style={{ height: `${ramBars[1]}px` }}
              />
              <div
                className="w-1.5 bg-primary transition-all duration-500 ease-out"
                style={{ height: `${ramBars[2]}px`, opacity: 0.9 }}
              />
              <div
                className="w-1.5 transition-all duration-500 ease-out"
                style={{
                  height: `${ramBars[3]}px`,
                  backgroundColor: ram > 12.2 ? "var(--color-primary)" : "var(--color-surface-container-highest)",
                  opacity: ram > 12.2 ? 0.9 : 0.5,
                }}
              />
            </div>
            <span className="tabular-nums min-w-[38px]">{ram}GB</span>
          </div>

          <span className="text-surface-container-highest">/</span>

          {/* LAT */}
          <div className="flex items-center gap-2">
            <span className="text-secondary-foreground font-bold flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-secondary-foreground animate-ping" />
              LAT
            </span>
            <span className="text-primary tabular-nums min-w-[24px]">{lat}ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

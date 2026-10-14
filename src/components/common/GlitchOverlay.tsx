import React from "react";

interface GlitchOverlayProps {
  isTransitioning: boolean;
  label?: string;
}

export const GlitchOverlay: React.FC<GlitchOverlayProps> = ({
  isTransitioning,
  label = "UPLINKING...",
}) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-200 flex items-center justify-center bg-surface-container-lowest/90 backdrop-blur-sm ${
        isTransitioning ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
      <span className="font-mono text-primary text-xl font-bold tracking-[0.5em] animate-pulse relative z-10 ml-[0.5em]">
        {label}
      </span>
    </div>
  );
};

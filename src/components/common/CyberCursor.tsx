import React, { useEffect, useState, useRef } from "react";

export const CyberCursor: React.FC = () => {
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Disable on touch-only mobile devices without mouse
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse) and (hover: none)").matches
    ) {
      return;
    }

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    cursorEl.style.display = "none";
    cursorEl.style.opacity = "0";

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update position synchronously with cursor
      cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      // Check if hovering an interactive/pressable element
      const target = e.target as HTMLElement | null;
      const interactive = target
        ? !!target.closest(
            "button, a, [role='button'], [role='tab'], .cursor-pointer, [data-interactive='true'], input[type='button'], input[type='submit']"
          )
        : false;

      if (interactive !== isHoveringRef.current) {
        isHoveringRef.current = interactive;

        if (interactive) {
          // Entering pressable: show immediately
          cursorEl.style.display = "block";
          cursorEl.style.opacity = "1";
        } else {
          // Leaving pressable: hide INSTANTLY with zero lingering or ghosting
          cursorEl.style.display = "none";
          cursorEl.style.opacity = "0";
        }
      }
    };

    const onMouseDown = () => {
      if (isHoveringRef.current) {
        setIsClicking(true);
      }
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      isHoveringRef.current = false;
      cursorEl.style.display = "none";
      cursorEl.style.opacity = "0";
      setIsClicking(false);
    };

    const onTouchStart = () => {
      isHoveringRef.current = false;
      cursorEl.style.display = "none";
      cursorEl.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        display: "none",
        opacity: 0,
        willChange: "transform",
      }}
    >
      {/* Rotating Cybertech Reticle (Themed to Site: Cyberpunk Yellow & Neon Cyan) */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-75 ease-out ${
          isClicking ? "scale-90" : "scale-100"
        }`}
      >
        {/* Outer Rotating Segmented Reticle (Cyber Yellow) */}
        <div className="size-10 border-2 border-dashed border-[#fcee0a] rounded-full animate-spin [animation-duration:5s] opacity-95 drop-shadow-[0_0_8px_rgba(252,238,10,0.85)]" />

        {/* Counter-Rotating 4 Chunky Cybertech Corner Brackets (Neon Cyan) */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin [animation-duration:9s] [animation-direction:reverse]">
          <span className="absolute top-0.5 left-0.5 size-2.5 border-t-2 border-l-2 border-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.95)]" />
          <span className="absolute top-0.5 right-0.5 size-2.5 border-t-2 border-r-2 border-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.95)]" />
          <span className="absolute bottom-0.5 left-0.5 size-2.5 border-b-2 border-l-2 border-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.95)]" />
          <span className="absolute bottom-0.5 right-0.5 size-2.5 border-b-2 border-r-2 border-[#00f0ff] drop-shadow-[0_0_6px_rgba(0,240,255,0.95)]" />
        </div>

        {/* 4 Directional Precision Tick Marks (Cyber Yellow) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="absolute -top-1 w-[2px] h-2 bg-[#fcee0a] drop-shadow-[0_0_4px_rgba(252,238,10,0.9)]" />
          <span className="absolute -bottom-1 w-[2px] h-2 bg-[#fcee0a] drop-shadow-[0_0_4px_rgba(252,238,10,0.9)]" />
          <span className="absolute -left-1 h-[2px] w-2 bg-[#fcee0a] drop-shadow-[0_0_4px_rgba(252,238,10,0.9)]" />
          <span className="absolute -right-1 h-[2px] w-2 bg-[#fcee0a] drop-shadow-[0_0_4px_rgba(252,238,10,0.9)]" />
        </div>

        {/* Solid Center Crosshair Pip with Cyan Dot */}
        <div className="absolute size-2 bg-[#07080a] border border-[#fcee0a] shadow-[0_0_6px_rgba(252,238,10,1)] flex items-center justify-center">
          <span className="size-0.5 bg-[#00f0ff]" />
        </div>

        {/* Click Shockwave Ring (Electric Cyan) */}
        {isClicking && (
          <span className="absolute inset-0 rounded-full border-2 border-[#00f0ff] animate-ping opacity-90 shadow-[0_0_12px_rgba(0,240,255,0.9)]" />
        )}
      </div>
    </div>
  );
};

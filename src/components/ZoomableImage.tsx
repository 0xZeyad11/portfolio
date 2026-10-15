import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Move } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  wrapperClassName?: string;
  badgeLabel?: string;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt = "Screenshot preview",
  caption,
  badgeLabel,
  className,
  wrapperClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // References for touch gesture handling
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialScaleRef = useRef(1);
  const lastTapRef = useRef<number>(0);

  // Reset zoom and pan whenever modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isOpen]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(3.5, Number((prev + 0.5).toFixed(1))));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(1, Number((prev - 0.5).toFixed(1)));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Keyboard zoom controls when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomOut();
      } else if (e.key === "0" || e.key === "r") {
        e.preventDefault();
        resetZoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, zoomIn, zoomOut, resetZoom]);

  // Touch Handlers for Mobile (Pinch to Zoom, Pan, Double-Tap)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // 2-finger pinch
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialScaleRef.current = scale;
    } else if (e.touches.length === 1) {
      // 1-finger double tap detection
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        // Double tap toggles between 1x and 2x
        if (scale > 1) {
          resetZoom();
        } else {
          setScale(2);
        }
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      // 1-finger pan if already zoomed in
      if (scale > 1) {
        setIsDragging(true);
        dragStartRef.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && initialPinchDistRef.current) {
      // Pinch zooming
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / initialPinchDistRef.current;
      const newScale = Math.min(4, Math.max(1, Number((initialScaleRef.current * factor).toFixed(2))));
      setScale(newScale);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      // Pan dragging
      const newX = e.touches[0].clientX - dragStartRef.current.x;
      const newY = e.touches[0].clientY - dragStartRef.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length < 2) {
      initialPinchDistRef.current = null;
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
      if (scale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  // Mouse Handlers for Desktop Drag / Pan
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale > 1 && e.button === 0) {
      e.preventDefault();
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  return (
    <>
      {/* Clickable Image Container */}
      <div
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative group/zoom cursor-zoom-in overflow-hidden transition-all duration-200 select-none",
          wrapperClassName
        )}
        title="Click to upscale & inspect image"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300 group-hover/zoom:scale-[1.03]",
            className
          )}
          {...props}
        />

        {/* Hover Tactical Overlay */}
        <div className="absolute inset-0 bg-surface-container-lowest/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none p-2">
          <div className="bg-surface-container-lowest/90 border border-primary/60 px-3 py-1.5 flex items-center gap-2 shadow-xl clip-chamfer">
            <ZoomIn className="size-3.5 text-primary animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase">
              [+ CLICK TO ZOOM ]
            </span>
          </div>
        </div>

        {/* Persistent Corner Zoom Badge */}
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover/zoom:opacity-100 transition-opacity">
          <div className="bg-surface-container-lowest/85 border border-border/80 px-1.5 py-0.5 flex items-center gap-1 font-mono text-[9px] text-foreground shadow-sm">
            <Maximize2 className="size-2.5 text-primary" />
            <span>ZOOM</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Touch-Optimized Zoom Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={true}
          className="w-[98vw] max-w-6xl h-[92vh] sm:h-[94vh] max-h-[94vh] p-2 sm:p-4 bg-surface-container-lowest/95 border-border clip-chamfer flex flex-col justify-between shadow-2xl overflow-hidden"
        >
          {/* Header Bar */}
          <DialogHeader className="p-1 pb-2 border-b border-border flex flex-row items-center justify-between space-y-0 gap-2 shrink-0">
            <div className="flex items-center gap-2 pr-12 min-w-0">
              <Badge variant="default" className="font-space text-[9px] sm:text-[10px] font-bold uppercase py-0.5 px-2 shrink-0">
                {badgeLabel || "HIGH FIDELITY PREVIEW"}
              </Badge>
              <DialogTitle className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground truncate">
                {caption || alt}
              </DialogTitle>
            </div>
            <DialogDescription className="sr-only">
              Full resolution upscaled view of {caption || alt}
            </DialogDescription>
          </DialogHeader>

          {/* Interactive Zoomable Viewport */}
          <div
            ref={containerRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex-1 relative flex items-center justify-center p-1 sm:p-2 overflow-hidden bg-black/90 border border-border/50 rounded-sm select-none touch-none"
            style={{ touchAction: "none" }}
          >
            {/* The Scalable / Pannable Image */}
            <img
              src={src}
              alt={alt}
              draggable={false}
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                transition: isDragging ? "none" : "transform 180ms ease-out",
                transformOrigin: "center center",
              }}
              className={cn(
                "max-h-full max-w-full w-auto h-auto object-contain filter contrast-[1.02] shadow-2xl pointer-events-auto",
                scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
              )}
            />

            {/* Mobile Touch Zoom & Pan Guide */}
            {scale > 1 && (
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-surface-container-lowest/80 border border-primary/40 px-2 py-0.5 font-mono text-[9px] text-primary pointer-events-none backdrop-blur-sm">
                <Move className="size-2.5 animate-pulse" />
                <span>DRAG TO PAN</span>
              </div>
            )}

            {/* Floating Cyberpunk Zoom Control HUD (Essential on Phones!) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-1.5 bg-surface-container-lowest/95 border border-primary/40 px-2.5 sm:px-3 py-1.5 backdrop-blur-md shadow-2xl clip-chamfer font-mono text-xs">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= 1}
                className="size-7 sm:size-8 flex items-center justify-center text-foreground hover:text-primary active:bg-surface-container disabled:opacity-25 disabled:pointer-events-none border border-border/70 hover:border-primary transition-colors bg-surface-container-low cursor-pointer"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut className="size-3.5 sm:size-4" />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="h-7 sm:h-8 px-2 sm:px-2.5 flex items-center justify-center font-bold text-[10px] sm:text-[11px] text-primary border border-border/70 hover:border-primary transition-colors bg-surface-container-low min-w-[50px] cursor-pointer"
                title="Click to Reset (100%)"
              >
                {Math.round(scale * 100)}%
              </button>

              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= 3.5}
                className="size-7 sm:size-8 flex items-center justify-center text-foreground hover:text-primary active:bg-surface-container disabled:opacity-25 disabled:pointer-events-none border border-border/70 hover:border-primary transition-colors bg-surface-container-low cursor-pointer"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn className="size-3.5 sm:size-4" />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="size-7 sm:size-8 flex items-center justify-center text-muted-foreground hover:text-foreground border border-border/70 hover:border-primary transition-colors bg-surface-container-low ml-0.5 sm:ml-1 cursor-pointer"
                title="Reset View"
                aria-label="Reset View"
              >
                <RotateCcw className="size-3 sm:size-3.5" />
              </button>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-muted-foreground font-mono text-[9px] sm:text-[10px] shrink-0">
            <span className="flex items-center gap-1.5 truncate">
              <span className="size-1.5 bg-primary rounded-full animate-ping shrink-0"></span>
              <span className="hidden sm:inline">TOUCH PINCH OR DOUBLE-TAP TO ZOOM // DRAG TO PAN</span>
              <span className="sm:hidden">PINCH OR USE +/- TO ZOOM</span>
            </span>
            <span className="hidden md:inline shrink-0">
              [ ESC OR OUTSIDE TO CLOSE ]
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

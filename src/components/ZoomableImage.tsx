import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ZoomIn, Maximize2 } from "lucide-react";
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

  return (
    <>
      {/* Clickable Image Container */}
      <div
        onClick={() => setIsOpen(true)}
        className={cn(
          "relative group/zoom cursor-zoom-in overflow-hidden transition-all duration-200 select-none",
          wrapperClassName
        )}
        title="Click to upscale image"
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
              [+ CLICK TO UPSCALE ]
            </span>
          </div>
        </div>

        {/* Persistent Corner Zoom Badge */}
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-70 group-hover/zoom:opacity-100 transition-opacity">
          <div className="bg-surface-container-lowest/80 border border-border/80 px-1.5 py-0.5 flex items-center gap-1 font-mono text-[8px] text-muted-foreground">
            <Maximize2 className="size-2.5 text-primary" />
            <span>ZOOM</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Upscale Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={true}
          className="sm:max-w-5xl md:max-w-6xl w-[96vw] max-h-[94vh] p-3 sm:p-4 bg-surface-container/95 border-border clip-chamfer flex flex-col justify-between shadow-2xl"
        >
          {/* Header Bar */}
          <DialogHeader className="p-1 pb-2 border-b border-border flex flex-row items-center justify-between space-y-0 gap-3">
            <div className="flex items-center gap-2 pr-8">
              <Badge variant="default" className="font-mono text-[10px] font-bold uppercase py-0.5 px-2">
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

          {/* Upscaled Image Viewport */}
          <div className="flex-1 flex items-center justify-center p-2 min-h-[300px] max-h-[78vh] overflow-auto bg-black/60 border border-border/50 rounded-sm">
            <img
              src={src}
              alt={alt}
              className="max-h-[76vh] w-auto max-w-full object-contain filter contrast-[1.02] shadow-2xl"
            />
          </div>

          {/* Footer Bar */}
          <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-muted-foreground font-mono text-[10px] gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
              STATUS: FULL FIDELITY RENDER
            </span>
            <span className="hidden sm:inline">
              [ ESC OR CLICK OUTSIDE TO CLOSE ]
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

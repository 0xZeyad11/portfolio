import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  withGlow?: boolean;
}

const sizeMap = {
  sm: "size-8",              // 32px
  md: "size-10 sm:size-11",  // 40px - 44px
  lg: "size-14 sm:size-16",  // 56px - 64px
  xl: "size-20 sm:size-24",  // 80px - 96px
};

/**
 * Minimal typographic schematic emblem on near-black background:
 * - Heavy geometric glyph "Z" in Cyber Yellow (#fcee0a) with yellow halo
 * - Heavy geometric glyph "H" in Crimson Red (#ff003c) with red halo
 * - Four chunky right-angle corner brackets framing the arrangement inward
 * - Faint square grid on near-black background
 * - Outlined warning badge in upper-right corner
 * - Abstract technical mark in lower-right corner
 */
export const Logo: React.FC<LogoProps> = ({
  size = "md",
  className,
  withGlow = true,
  ...props
}) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center shrink-0 group select-none", sizeMap[size])}>
      {/* Ambient dual-color soft glow on hover */}
      {withGlow && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#fcee0a]/15 via-transparent to-[#ff003c]/15 blur-md rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        className={cn(
          "w-full h-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition-transform duration-300 group-hover:scale-105",
          className
        )}
        {...props}
      >
        <defs>
          {/* Cyberpunk Yellow Halo for Z */}
          <filter id="zh-yellow-halo" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fcee0a" floodOpacity="0.65" />
            <feDropShadow dx="0" dy="0" stdDeviation="5.5" floodColor="#fcee0a" floodOpacity="0.3" />
          </filter>

          {/* Crimson Red Halo for H */}
          <filter id="zh-red-halo" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff003c" floodOpacity="0.65" />
            <feDropShadow dx="0" dy="0" stdDeviation="5.5" floodColor="#ff003c" floodOpacity="0.3" />
          </filter>

          {/* White halo for brackets & accents */}
          <filter id="zh-white-halo" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#a0b0c5" floodOpacity="0.2" />
          </filter>

          {/* Regular square grid pattern */}
          <pattern id="zh-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1d212b" strokeWidth="0.75" />
          </pattern>
        </defs>

        {/* 1. Near-Black Background */}
        <rect width="100" height="100" fill="#090a0d" stroke="#222733" strokeWidth="1" />

        {/* 2. Faint Regular Square Grid */}
        <rect width="100" height="100" fill="url(#zh-grid)" opacity="0.6" />

        {/* 3. Upper-Right Tiny Outlined Warning Badge with Minute Text */}
        <g opacity="0.8" className="group-hover:opacity-100 transition-opacity">
          <rect x="76" y="5" width="19" height="7" rx="1" fill="#140a0f" stroke="#ff003c" strokeWidth="0.7" strokeOpacity="0.65" />
          {/* Warning triangle */}
          <polygon points="79.5,10 81,6.5 82.5,10" fill="none" stroke="#ff4d73" strokeWidth="0.6" />
          <line x1="81" y1="7.6" x2="81" y2="8.8" stroke="#ff4d73" strokeWidth="0.5" />
          <circle cx="81" cy="9.5" r="0.25" fill="#ff4d73" />
          <text
            x="89"
            y="9.8"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="3"
            fontWeight="700"
            fill="#ff4d73"
            textAnchor="middle"
            letterSpacing="0.4"
          >
            WARN
          </text>
        </g>

        {/* 4. Four Chunky Right-Angle Bracket Shapes Framing the Arrangement */}
        <g fill="#ffffff" filter="url(#zh-white-halo)">
          {/* Top-Left */}
          <path d="M 19,16 H 31 V 23 H 23 V 31 H 16 V 19 L 19,16 Z" />
          {/* Top-Right */}
          <path d="M 81,16 L 84,19 V 31 H 77 V 23 H 69 V 16 H 81 Z" />
          {/* Bottom-Left */}
          <path d="M 16,69 H 23 V 77 H 31 V 84 H 19 L 16,81 V 69 Z" />
          {/* Bottom-Right */}
          <path d="M 77,77 V 69 H 84 V 81 L 81,84 H 69 V 77 H 77 Z" />
        </g>

        {/* 5. Central Large Heavy Geometric Glyphs */}
        {/* Glyph 'Z' in Cyber Yellow with Yellow Halo */}
        <path
          d="M 24,35 H 48 V 44.5 L 34,55.5 H 48 V 65 H 24 V 55.5 L 38,44.5 H 24 Z"
          fill="#fcee0a"
          filter="url(#zh-yellow-halo)"
        />

        {/* Glyph 'H' in Crimson Red with Red Halo */}
        <path
          d="M 52,35 H 60 V 45.5 H 68 V 35 H 76 V 65 H 68 V 54.5 H 60 V 65 H 52 Z"
          fill="#ff003c"
          filter="url(#zh-red-halo)"
        />

        {/* 6. Lower-Right Small White Abstract Mark */}
        <g fill="#ffffff" opacity="0.9">
          <path d="M 87,88 H 91 L 94,91.5 V 95 H 90.5 L 87,91.5 Z" />
          <path d="M 91.5,88 L 95,88 V 91.5 Z" />
          <circle cx="89" cy="94" r="0.8" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;

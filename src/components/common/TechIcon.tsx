import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypeorm,
  SiDocker,
  SiCaddy,
  SiReact,
  SiTailwindcss,
  SiNpm,
  SiStripe,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Terminal, Database } from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "size-3.5" }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "typescript":
      return <SiTypescript className={className} />;
    case "javascript":
      return <SiJavascript className={className} />;
    case "c":
    case "cpp":
    case "cplusplus":
      return <SiCplusplus className={className} />;
    case "sql":
      return <TbSql className={className} />;
    case "postgis":
      return <Database className={className} />;
    case "nestjs":
      return <SiNestjs className={className} />;
    case "nodejs":
      return <SiNodedotjs className={className} />;
    case "express":
    case "expressjs":
      return <SiExpress className={className} />;
    case "websockets":
      return <SiSocketdotio className={className} />;
    case "jwtrbac":
    case "jwt":
      return <SiJsonwebtokens className={className} />;
    case "postgresql":
      return <SiPostgresql className={className} />;
    case "mongodb":
      return <SiMongodb className={className} />;
    case "prisma":
      return <SiPrisma className={className} />;
    case "typeorm":
      return <SiTypeorm className={className} />;
    case "docker":
      return <SiDocker className={className} />;
    case "caddy":
      return <SiCaddy className={className} />;
    case "react":
      return <SiReact className={className} />;
    case "tailwindcss":
      return <SiTailwindcss className={className} />;
    case "npm":
      return <SiNpm className={className} />;
    case "stripe":
      return <SiStripe className={className} />;
    case "cli":
    case "terminal":
      return <Terminal className={className} />;
    default:
      return null;
  }
};

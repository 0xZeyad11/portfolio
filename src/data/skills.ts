import type { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "code",
    skills: [
      { name: "TypeScript", variant: "default", highlight: true },
      { name: "JavaScript", variant: "secondary" },
      { name: "C++", variant: "outline" },
      { name: "SQL", variant: "outline" },
    ],
  },
  {
    title: "Backend & APIs",
    iconName: "server",
    skills: [
      { name: "NestJS", variant: "default", highlight: true },
      { name: "Node.js", variant: "secondary" },
      { name: "Express.js", variant: "secondary" },
      { name: "WebSockets", variant: "outline", highlight: true },
      { name: "JWT / RBAC", variant: "outline", highlight: true },
    ],
  },
  {
    title: "Databases & ORMs",
    iconName: "database",
    skills: [
      { name: "PostgreSQL", variant: "default", highlight: true },
      { name: "MongoDB", variant: "secondary" },
      { name: "Prisma", variant: "outline" },
      { name: "TypeORM", variant: "outline" },
    ],
  },
  {
    title: "DevOps & Frontend",
    iconName: "layers",
    skills: [
      { name: "Docker", variant: "default", highlight: true },
      { name: "Caddy", variant: "secondary" },
      { name: "React", variant: "outline" },
      { name: "Tailwind CSS", variant: "outline" },
    ],
  },
];

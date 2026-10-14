export type SectionId = "overview" | "experience" | "projects";

export type AppRoute = "home" | "blue-coast";

export interface Project {
  id: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  status: string;
  statusVariant: "default" | "secondary" | "destructive" | "outline";
  linkText: string;
  linkUrl: string;
  linkVariant: "default" | "secondary" | "destructive" | "outline";
}

export interface SkillItem {
  name: string;
  variant: "default" | "secondary" | "outline";
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: "code" | "server" | "database" | "layers";
  skills: SkillItem[];
}

export interface TelemetryData {
  operativeId: string;
  systemRole: string;
  status: string;
  cpuUsage: number;
  ramUsage: string;
  pwrLevel: number;
}

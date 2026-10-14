import type { SectionId } from "@/types/portfolio";

export interface NavItem {
  id: SectionId;
  label: string;
  progressPercent: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "OVERVIEW", progressPercent: "33%" },
  { id: "experience", label: "Experience Log", progressPercent: "66%" },
  { id: "projects", label: "Projects Stack", progressPercent: "100%" },
];

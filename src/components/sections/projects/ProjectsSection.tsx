import React, { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { FolderGit2, Search } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS_DATA;
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS_DATA.filter((p) => {
      const projectKey = p.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const localizedTitle = t(`projects.items.${projectKey}.title`, p.title).toLowerCase();
      const localizedDesc = t(`projects.items.${projectKey}.description`, p.description).toLowerCase();
      const localizedCat = t(`projects.items.${projectKey}.category`, p.category).toLowerCase();

      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        localizedTitle.includes(q) ||
        localizedDesc.includes(q) ||
        localizedCat.includes(q) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, t]);

  return (
    <section id="projects" className="scroll-mt-28 w-full mb-space-xl">
      <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low border border-border px-space-md py-space-sm mb-space-md">
        <div className="flex items-center gap-space-sm">
          <FolderGit2 className="size-4 text-primary" />
          <span className="font-label-lg text-label-lg uppercase font-bold text-foreground tracking-wider">
            {t("projects.searchBadge", "[ API & SOFTWARE PROJECTS ]")}
          </span>
        </div>

        {/* Live Search using Shadcn Input with RTL support */}
        <div className="w-full sm:w-72 relative">
          <Search className="absolute start-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("projects.searchPlaceholder", "FILTER BY TECH / KEYWORD...")}
            className="ps-8 h-8 font-mono text-xs bg-surface-container border-border text-foreground placeholder:text-muted-foreground rounded-none"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-space-md">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center font-mono text-muted-foreground">
            {t("projects.noMatches", "// NO MISSIONS FOUND MATCHING")} &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </section>
  );
};

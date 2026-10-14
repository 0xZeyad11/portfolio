import React, { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { FolderGit2, Search } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS_DATA;
    const q = searchQuery.toLowerCase();
    return PROJECTS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <section id="projects" className="scroll-mt-28 w-full mb-space-xl">
      <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low border border-border px-space-md py-space-sm mb-space-md">
        <div className="flex items-center gap-space-sm">
          <FolderGit2 className="size-4 text-primary" />
          <span className="font-label-lg text-label-lg uppercase font-bold text-foreground tracking-wider">
            [ API & SOFTWARE PROJECTS ]
          </span>
        </div>

        {/* Live Search using Shadcn Input */}
        <div className="w-full sm:w-72 relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="FILTER BY TECH / KEYWORD..."
            className="pl-8 h-8 font-mono text-xs bg-surface-container border-border text-foreground placeholder:text-muted-foreground rounded-none"
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
            // NO MISSIONS FOUND MATCHING &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </section>
  );
};

import React from "react";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-surface-container border-border clip-chamfer shadow-xl flex flex-col md:flex-row group hover:border-primary/50 transition-colors overflow-hidden">
      {/* Left: Project Image Thumbnail */}
      <div className="w-full md:w-80 lg:w-96 shrink-0 bg-surface-container-lowest border-b md:border-b-0 md:border-r border-border/60 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center bg-surface-container-low border border-border/40 px-2.5 py-1 mb-3">
          <span className="font-mono text-xs font-bold text-primary">{project.tag}</span>
          <Badge
            variant={project.statusVariant}
            className="font-mono text-[9px] uppercase px-1.5 py-0"
          >
            {project.status.replace("STATUS: ", "")}
          </Badge>
        </div>

        {project.image ? (
          <div className="w-full aspect-video bg-surface-container-lowest border border-border/60 flex items-center justify-center relative overflow-hidden group-hover:border-primary/40 transition-colors">
            <ZoomableImage
              src={project.image}
              alt={project.title}
              caption={project.title}
              badgeLabel={project.tag}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              wrapperClassName="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-surface-container-lowest border border-border/60 flex flex-col items-center justify-center relative font-mono text-xs text-muted-foreground gap-2">
            <Terminal className="size-8 text-destructive animate-pulse" />
            <span>[ CLI_FEED // TERMINAL_ACTIVE ]</span>
          </div>
        )}

        <div className="mt-3 hidden md:flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>CLICK IMAGE TO EXPAND</span>
          <span className="text-primary font-bold">HD</span>
        </div>
      </div>

      {/* Right: Project Details */}
      <div className="flex-1 flex flex-col justify-between p-5 md:p-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase font-bold text-secondary-foreground tracking-wider">
              // {project.category}
            </span>
          </div>

          <CardTitle className="font-headline-sm text-xl lg:text-2xl font-bold text-foreground uppercase tracking-tight">
            {project.title}
          </CardTitle>

          <CardDescription className="font-body-md text-sm text-muted-foreground mt-3 leading-relaxed">
            {project.description}
          </CardDescription>
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="font-mono text-[10px] sm:text-xs bg-surface-container-highest/60 text-foreground border-border px-2.5 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Link Button */}
          <Button
            variant={project.linkVariant}
            size="sm"
            asChild
            className="font-mono font-bold text-xs uppercase tracking-wider clip-chamfer h-8 px-4 gap-1.5 cursor-pointer shrink-0"
          >
            <a href={project.linkUrl} target="_blank" rel="noreferrer">
              {project.linkText}
              <ExternalLink className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

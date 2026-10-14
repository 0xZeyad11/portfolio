import React from "react";
import { ZoomableImage } from "@/components/ZoomableImage";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-surface-container border-border clip-chamfer shadow-xl flex flex-col justify-between group hover:border-primary/50 transition-colors">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-center bg-surface-container-low border border-border/40 px-2.5 py-1 mb-2">
          <span className="font-mono text-xs font-bold text-primary">{project.tag}</span>
        </div>

        {project.image ? (
          <div className="w-full aspect-video bg-surface-container-lowest border border-border/60 flex items-center justify-center relative overflow-hidden">
            <ZoomableImage
              src={project.image}
              alt={project.title}
              caption={project.title}
              badgeLabel={project.tag}
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-surface-container-lowest border border-border/60 flex flex-col items-center justify-center relative font-mono text-xs text-muted-foreground gap-2">
            <Terminal className="size-8 text-destructive animate-pulse" />
            <span>[ CLI_FEED // TERMINAL_ACTIVE ]</span>
          </div>
        )}

        <CardTitle className="font-headline-sm text-lg font-bold text-foreground uppercase tracking-tight mt-3">
          {project.title}
        </CardTitle>
        <CardDescription className="font-body-sm text-xs text-muted-foreground mt-1 line-clamp-4">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-1">
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-mono text-[10px] bg-surface-container-highest/60 text-foreground border-border px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-3 bg-surface-container-lowest/80 border-t border-border flex items-center justify-between">
        <span className="font-label-sm text-[10px] text-primary font-bold font-mono">
          {project.status}
        </span>

        <Button
          variant={project.linkVariant}
          size="sm"
          asChild
          className="font-mono font-bold text-[11px] uppercase tracking-wider clip-chamfer h-7 px-3 gap-1 cursor-pointer"
        >
          <a href={project.linkUrl} target="_blank" rel="noreferrer">
            {project.linkText}
            <ExternalLink className="size-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

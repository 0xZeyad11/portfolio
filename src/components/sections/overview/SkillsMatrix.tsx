import React from "react";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Layers } from "lucide-react";
import { TechIcon } from "@/components/common/TechIcon";
import { SKILL_CATEGORIES } from "@/data/skills";
import type { SkillCategory } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const getCategoryTranslationKey = (iconName: SkillCategory["iconName"]): string => {
  switch (iconName) {
    case "code":
      return "skills.languages";
    case "server":
      return "skills.backend";
    case "database":
      return "skills.database";
    case "layers":
      return "skills.devops";
    default:
      return "skills.languages";
  }
};

const renderCategoryIcon = (iconName: SkillCategory["iconName"]) => {
  switch (iconName) {
    case "code":
      return <Code2 className="size-3.5" />;
    case "server":
      return <Server className="size-3.5" />;
    case "database":
      return <Database className="size-3.5" />;
    case "layers":
      return <Layers className="size-3.5" />;
    default:
      return null;
  }
};

export const SkillsMatrix: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.title} className="flex flex-col gap-space-sm">
          <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-wider pb-1.5 border-b border-surface-container-highest flex items-center gap-1.5">
            {renderCategoryIcon(category.iconName)} {t(getCategoryTranslationKey(category.iconName), category.title)}
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {category.skills.map((skill) => {
              if (skill.variant === "default") {
                return (
                  <Badge
                    key={skill.name}
                    variant="default"
                    className="font-space text-xs font-bold uppercase py-1 px-2.5 gap-1.5"
                  >
                    <TechIcon name={skill.name} className="size-3" />
                    {skill.name}
                  </Badge>
                );
              }
              if (skill.variant === "secondary") {
                return (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="font-space text-xs font-bold uppercase py-1 px-2.5 gap-1.5"
                  >
                    <TechIcon name={skill.name} className="size-3" />
                    {skill.name}
                  </Badge>
                );
              }
              return (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className={`font-space text-xs uppercase py-1 px-2.5 gap-1.5 ${
                    skill.highlight
                      ? "border-primary/50 text-primary font-bold shadow-[0_0_8px_rgba(252,238,10,0.25)]"
                      : "border-border"
                  }`}
                >
                  <TechIcon name={skill.name} className="size-3" />
                  {skill.name}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

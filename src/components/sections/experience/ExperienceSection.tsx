import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Maximize2, Cpu, Database, Server, FileText } from "lucide-react";
import { ZoomableImage } from "@/components/ZoomableImage";
import { TechIcon } from "@/components/common/TechIcon";
import { useLanguage } from "@/context/LanguageContext";
import bcDashboard from "@/assets/bluecoast showcase/02_dashboard_overview.png";

interface ExperienceSectionProps {
  onNavigateToSubpage: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onNavigateToSubpage,
}) => {
  const { t } = useLanguage();

  const rawHighlights = t("experience.highlights");
  const highlights: string[] = Array.isArray(rawHighlights) ? (rawHighlights as string[]) : [];
  const col1 = highlights.slice(0, Math.ceil(highlights.length / 2));
  const col2 = highlights.slice(Math.ceil(highlights.length / 2));

  return (
    <section id="experience" className="scroll-mt-28 w-full mb-space-xl">
      <div className="flex items-center justify-between bg-surface-container-low border border-border px-space-md py-space-xs mb-space-md">
        <span className="font-label-md text-label-md uppercase font-bold text-primary tracking-wider flex items-center gap-2">
          <Activity className="size-4 text-primary" />
          {t("experience.sectionBadge", "// OPERATIONAL HISTORY & EXPERTISE")}
        </span>
      </div>

      <Card className="bg-surface-container border-l-4 border-l-primary border-t border-r border-b border-border shadow-xl clip-chamfer">
        {/* Top Split Section: Details + Showcase Image */}
        <CardHeader className="bg-surface-container-low/60 border-b border-border pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Role, Description & Metrics */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="font-mono text-secondary-foreground font-bold tracking-widest uppercase"
                >
                  {t("experience.company", "CORP: BLUE COAST ERP")}
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-muted-foreground border-border text-xs">
                  {t("experience.type", "FREELANCE")}
                </Badge>
                <Badge
                  variant="outline"
                  className="font-space text-secondary-foreground font-bold bg-surface-container-low px-2.5 py-0.5 border-border text-xs"
                >
                  {t("experience.period", "JAN 2026 - PRESENT")}
                </Badge>
              </div>

              <div>
                <CardTitle className="font-headline-sm text-2xl font-bold text-on-surface uppercase tracking-tight">
                  {t("experience.title", "FULLSTACK ENGINEER (FREELANCE)")}
                </CardTitle>
                <CardDescription className="font-body-md text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  {t("experience.description", "Designed and built the complete backend for a production desktop ERP suite engineered for industrial aluminum and glass fabricators.")}
                </CardDescription>
              </div>

              {/* Technologies Badges with Icons */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="NestJS" className="size-3 text-primary" /> NestJS
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="TypeScript" className="size-3 text-primary" /> TypeScript
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="PostgreSQL" className="size-3 text-primary" /> PostgreSQL
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="TypeORM" className="size-3 text-primary" /> TypeORM
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Docker" className="size-3 text-primary" /> Docker
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Python" className="size-3 text-primary" /> Python
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Caddy" className="size-3 text-primary" /> Caddy
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="JWT" className="size-3 text-primary" /> JWT / RBAC
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="PDF" className="size-3 text-primary" /> pdfmake
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Electron" className="size-3 text-secondary-foreground" /> Electron
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="React" className="size-3 text-secondary-foreground" /> React
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="TailwindCSS" className="size-3 text-secondary-foreground" /> Tailwind
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Vite" className="size-3 text-secondary-foreground" /> Vite
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-0.5 gap-1.5">
                  <TechIcon name="Git" className="size-3 text-secondary-foreground" /> Git
                </Badge>
              </div>

              {/* Subsystem Telemetry Badges - 4 High Density Metric HUD cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Server className="size-3 text-primary" /> {t("experience.telemetry.backend", "BACKEND")}
                  </span>
                  <span className="font-mono font-bold text-xs text-primary block mt-0.5">{t("experience.telemetry.modules", "15+ Modules")}</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">{t("experience.telemetry.modulesSub", "NestJS + TypeORM")}</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Cpu className="size-3 text-secondary-foreground" /> {t("experience.telemetry.optimizer", "OPTIMIZER")}
                  </span>
                  <span className="font-mono font-bold text-xs text-secondary-foreground block mt-0.5">{t("experience.telemetry.binPacking", "Bin-Packing")}</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">{t("experience.telemetry.binPackingSub", "Scrap Reduction")}</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Database className="size-3 text-primary" /> {t("experience.telemetry.database", "DATABASE")}
                  </span>
                  <span className="font-mono font-bold text-xs text-primary block mt-0.5">{t("experience.telemetry.dbEngine", "PostgreSQL")}</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">{t("experience.telemetry.dbSub", "Docker + Caddy")}</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Activity className="size-3 text-secondary-foreground" /> {t("experience.telemetry.coverage", "COVERAGE")}
                  </span>
                  <span className="font-mono font-bold text-xs text-secondary-foreground block mt-0.5">{t("experience.telemetry.systems", "4 Systems")}</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">{t("experience.telemetry.systemsSub", "PS & Sonata")}</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Showcase Preview Image */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between">
              <Card className="bg-surface-container-low border-border overflow-hidden clip-chamfer shadow-xl group">
                <div className="aspect-[16/10] max-h-[300px] bg-black/60 relative overflow-hidden">
                  <ZoomableImage
                    src={bcDashboard}
                    alt="Blue Coast OS Production Dashboard Overview"
                    caption={t("experience.previewCaption", "BLUE COAST OS // PRODUCTION RUNTIME DASHBOARD OVERVIEW")}
                    badgeLabel={t("experience.previewBadge", "SYSTEM OVERVIEW")}
                    className="w-full h-full object-cover object-top"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="p-2.5 bg-surface-container-lowest/90 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-bold text-[11px] flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    {t("experience.previewFooter", "BLUE COAST OS // EXECUTIVE DASHBOARD")}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Maximize2 className="size-3 text-secondary-foreground" />
                    {t("experience.expandHint", "CLICK TO EXPAND")}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </CardHeader>

        {/* Bottom Section: Balanced 2-Column Architecture Highlights */}
        <CardContent className="pt-6">
          <div className="space-y-3">
            <span className="font-mono text-xs text-secondary-foreground uppercase font-bold tracking-wider flex items-center gap-2">
              <FileText className="size-3.5 text-secondary-foreground" />
              {t("experience.highlightsTitle", "// ARCHITECTURAL ACHIEVEMENTS & DOMAIN HIGHLIGHTS")}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
              {/* Column 1 */}
              <ul className="text-muted-foreground font-body-sm space-y-3 list-disc ps-5 marker:text-secondary-foreground">
                {col1.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="text-muted-foreground font-body-sm space-y-3 list-disc ps-5 marker:text-primary">
                {col2.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subpage Dossier Link Footer */}
          <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse shrink-0"></span>
              <span className="font-mono text-xs text-muted-foreground">
                {t("experience.caseStudySub", "IN-DEPTH ARCHITECTURE, CUT PLAN ALGORITHM & PRODUCTION SCREENSHOTS")}
              </span>
            </div>

            <Button
              variant="default"
              onClick={onNavigateToSubpage}
              className="w-full sm:w-auto font-space font-bold text-xs uppercase tracking-wider clip-chamfer gap-2 h-9 px-4 cursor-pointer shadow-md hover:shadow-primary/20 text-center justify-center shrink-0"
            >
              {t("experience.caseStudyButton", "[ EXPLORE FULL BLUE COAST ERP CASE STUDY ]")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

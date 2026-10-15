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
import bcDashboard from "@/assets/bluecoast showcase/02_dashboard_overview.png";

interface ExperienceSectionProps {
  onNavigateToSubpage: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onNavigateToSubpage,
}) => {
  return (
    <section id="experience" className="scroll-mt-28 w-full mb-space-xl">
      <div className="flex items-center justify-between bg-surface-container-low border border-border px-space-md py-space-xs mb-space-md">
        <span className="font-label-md text-label-md uppercase font-bold text-primary tracking-wider flex items-center gap-2">
          <Activity className="size-4 text-primary" />
          // OPERATIONAL HISTORY & EXPERTISE
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
                  CORP: BLUE COAST ERP
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-muted-foreground border-border text-xs">
                  FREELANCE
                </Badge>
                <Badge
                  variant="outline"
                  className="font-space text-secondary-foreground font-bold bg-surface-container-low px-2.5 py-0.5 border-border text-xs"
                >
                  JAN 2026 - PRESENT
                </Badge>
              </div>

              <div>
                <CardTitle className="font-headline-sm text-2xl font-bold text-on-surface uppercase tracking-tight">
                  FULLSTACK ENGINEER (FREELANCE)
                </CardTitle>
                <CardDescription className="font-body-md text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  Designed and built the complete backend for a production desktop ERP suite engineered for industrial aluminum
                  and glass fabricators. Orchestrates end-to-end manufacturing lifecycles, cut plan scrap optimization, and
                  automated quotation calculation. Built with NestJS, TypeScript, PostgreSQL, and Docker.
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
                    <Server className="size-3 text-primary" /> BACKEND
                  </span>
                  <span className="font-mono font-bold text-xs text-primary block mt-0.5">15+ Modules</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">NestJS + TypeORM</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Cpu className="size-3 text-secondary-foreground" /> OPTIMIZER
                  </span>
                  <span className="font-mono font-bold text-xs text-secondary-foreground block mt-0.5">Bin-Packing</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">Scrap Reduction</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Database className="size-3 text-primary" /> DATABASE
                  </span>
                  <span className="font-mono font-bold text-xs text-primary block mt-0.5">PostgreSQL</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">Docker + Caddy</span>
                </div>

                <div className="p-2.5 bg-surface-container/80 border border-border clip-chamfer">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                    <Activity className="size-3 text-secondary-foreground" /> COVERAGE
                  </span>
                  <span className="font-mono font-bold text-xs text-secondary-foreground block mt-0.5">4 Systems</span>
                  <span className="font-mono text-[10px] text-muted-foreground block">PS & Sonata</span>
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
                    caption="BLUE COAST OS // PRODUCTION RUNTIME DASHBOARD OVERVIEW"
                    badgeLabel="SYSTEM OVERVIEW"
                    className="w-full h-full object-cover object-top"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="p-2.5 bg-surface-container-lowest/90 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-bold text-[11px] flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    BLUE COAST OS // EXECUTIVE DASHBOARD
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Maximize2 className="size-3 text-secondary-foreground" />
                    CLICK TO EXPAND
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
              // ARCHITECTURAL ACHIEVEMENTS & DOMAIN HIGHLIGHTS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
              {/* Column 1 */}
              <ul className="text-muted-foreground font-body-sm space-y-3 list-disc pl-5 marker:text-secondary-foreground">
                <li>
                  Architected a modular NestJS backend with 15+ domain modules including compounds, buildings,
                  floors, apartments, windows, cut plans, glass batches, accessories, pricing, invoices, reports,
                  weights, PDFs, images, and system configuration.
                </li>
                <li>
                  Engineered a builder-pattern window calculation engine supporting 4 aluminum profile systems (PS
                  9600, PS 6600, PS 4800, Sonata 45) with configurable sub-types and options.
                </li>
                <li>
                  Developed a Best Decreasing Fit bin-packing algorithm for generating optimized aluminum cut plans that
                  minimize material waste, factoring in blade kerf and 45-degree cutting angle adjustments.
                </li>
                <li>
                  Built a pricing engine that computes per-square-meter window pricing by aggregating aluminum weight,
                  glass area, and accessories costs with configurable waste percentages, plus fabrication,
                  installation, transportation, and profit margin calculations.
                </li>
                <li>
                  Designed an invoicing module with automatic total calculation from window specifications via
                  integration with the pricing engine, supporting invoice lifecycle management.
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="text-muted-foreground font-body-sm space-y-3 list-disc pl-5 marker:text-primary">
                <li>
                  Created a 3-tier reporting system (system-wide, compound-level, building-level) with aggregated
                  analytics for material consumption, profile usage efficiency, accessory usage, unit counts, and
                  financial summaries.
                </li>
                <li>
                  Generated Arabic RTL PDF reports using pdfmake with Cairo font support, exporting window
                  measurement tables grouped by profile system.
                </li>
                <li>
                  Implemented JWT-based authentication with access and refresh token rotation, bcrypt password hashing,
                  and role-based authorization (RBAC) enforced globally via NestJS guards.
                </li>
                <li>
                  Managed database schema evolution with TypeORM migrations and seeded reference data for accessories
                  and profile weights via dedicated seed scripts.
                </li>
                <li>
                  Containerized the full production stack (NestJS backend, PostgreSQL database, Caddy reverse proxy)
                  using Docker Compose for both development and production environments.
                </li>
              </ul>
            </div>
          </div>

          {/* Subpage Dossier Link Footer */}
          <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse shrink-0"></span>
              <span className="font-mono text-xs text-muted-foreground">
                ARCHITECTURAL CASE STUDY & 6 INTERACTIVE SYSTEM SCREENS READY
              </span>
            </div>

            <Button
              variant="default"
              onClick={onNavigateToSubpage}
              className="w-full sm:w-auto font-space font-bold text-xs uppercase tracking-wider clip-chamfer gap-2 h-9 px-4 cursor-pointer shadow-md hover:shadow-primary/20 text-center justify-center shrink-0"
            >
              [ VIEW FULL BLUE COAST ERP CASE STUDY → ]
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

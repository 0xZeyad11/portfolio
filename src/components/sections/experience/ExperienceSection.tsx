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
import { Activity } from "lucide-react";

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
        <CardHeader className="bg-surface-container-low/60 border-b border-border pb-3">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="font-mono text-secondary-foreground font-bold tracking-widest uppercase"
                >
                  CORP: BLUE COAST ERP
                </Badge>
                <Badge variant="outline" className="font-mono text-muted-foreground border-border text-xs">
                  FREELANCE
                </Badge>
              </div>
              <CardTitle className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase mt-2">
                FULLSTACK ENGINEER (FREELANCE)
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className="font-mono text-secondary-foreground font-bold bg-surface-container-low px-3 py-1 border-border"
            >
              JAN 2026 - PRESENT
            </Badge>
          </div>
          <CardDescription className="font-body-md text-body-md text-muted-foreground mt-2">
            Designed and built the backend for a production desktop ERP system used by an aluminum and glass
            fabrication company. The system manages the full lifecycle of construction projects. Built with
            NestJS, TypeScript, PostgreSQL, and Docker.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-5">
          <ul className="text-muted-foreground font-body-sm space-y-2.5 list-disc pl-5 marker:text-secondary-foreground">
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

          {/* Subpage Dossier Link */}
          <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary-foreground rounded-full"></span>
              <span className="font-mono text-xs text-muted-foreground">
                ARCHITECTURAL CASE STUDY & SYSTEM SCREENSHOTS
              </span>
            </div>

            <Button
              variant="default"
              onClick={onNavigateToSubpage}
              className="font-mono font-bold text-xs uppercase tracking-wider clip-chamfer gap-2 h-9 px-4 cursor-pointer shadow-md hover:shadow-primary/20"
            >
              [ VIEW FULL BLUE COAST ERP CASE STUDY → ]
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

import React, { type SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ZoomableImage } from "@/components/ZoomableImage";
import { PROFILE_INFO, cvUrl } from "@/constants/profile";

// Showcase images
import bcDashboard from "@/assets/bluecoast showcase/02_dashboard_overview.png";
import bcHierarchy from "@/assets/bluecoast showcase/07_compound_details_muruj.png";
import bcCutplan from "@/assets/bluecoast showcase/09_batch_cutplan_details.png";
import bcCalculator from "@/assets/bluecoast showcase/18_window_calculator.png";
import bcInvoices from "@/assets/bluecoast showcase/17_invoices_list.png";

// Lucide Icons
import {
  ArrowLeft,
  Cpu,
  Layers,
  FileDown,
  Mail,
  CheckCircle2,
  Boxes,
  Calculator,
  ShieldCheck,
} from "lucide-react";

interface BlueCoastDetailsProps {
  onBack: () => void;
}

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const BlueCoastDetails: React.FC<BlueCoastDetailsProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface font-body-md pb-24 antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="font-mono text-xs uppercase font-bold tracking-wider border-border hover:border-primary text-foreground hover:text-primary clip-chamfer gap-2 h-9 px-3.5 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            [ ← RETURN TO PORTFOLIO ]
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              CASE STUDY // BLUE COAST OS (ERP)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              asChild
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 cursor-pointer shadow-md"
            >
              <a href="mailto:zeyadhesham176@gmail.com">
                <Mail className="size-3.5" />
                <span className="hidden sm:inline">[ CONTACT ZEYAD ]</span>
                <span className="sm:hidden">CONTACT</span>
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
            >
              <a href={cvUrl} download={PROFILE_INFO.cvFileName}>
                <FileDown className="size-3.5" />
                <span className="hidden sm:inline">[ EXPORT CV ]</span>
                <span className="sm:hidden">CV</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default" className="font-mono text-xs font-bold uppercase py-1 px-3">
              ENTERPRISE DESKTOP ERP
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs font-bold uppercase py-1 px-3 text-secondary-foreground">
              ROLE: BACKEND & FULLSTACK ARCHITECT
            </Badge>
            <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border text-muted-foreground">
              JAN 2026 - PRESENT
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl uppercase font-bold tracking-tight text-primary">
              Blue Coast OS
            </h1>
            <p className="font-headline-sm text-lg sm:text-xl text-secondary-foreground font-mono">
              Industrial Aluminum Fabrication Management & Cut Plan Optimization Platform
            </p>
            <p className="font-body-lg text-base sm:text-lg text-muted-foreground max-w-4xl leading-relaxed pt-2">
              Blue Coast OS is an end-to-end manufacturing execution and financial planning desktop platform engineered
              specifically for architectural aluminum and glass fabricators. It replaces error-prone spreadsheets with
              algorithmic cutting layouts that eliminate scrap waste, automated multi-level architectural hierarchy
              tracking, and dynamic per-square-meter quotation engines.
            </p>
          </div>

          {/* Quick Metrics HUD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">BACKEND DOMAINS</span>
              <span className="font-headline-md text-2xl font-bold text-primary font-mono mt-1 block">15+ Modules</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">Modular NestJS architecture</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">CUT OPTIMIZATION</span>
              <span className="font-headline-md text-2xl font-bold text-secondary-foreground font-mono mt-1 block">Bin-Packing</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">Best Decreasing Fit scrap minimization</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">SUPPORTED SYSTEMS</span>
              <span className="font-headline-md text-2xl font-bold text-primary font-mono mt-1 block">4 Architectural</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">PS 9600, 6600, 4800, Sonata 45</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">DEPLOYMENT</span>
              <span className="font-headline-md text-2xl font-bold text-secondary-foreground font-mono mt-1 block">Dockerized</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">PostgreSQL + NestJS + Caddy</span>
            </Card>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* The Problem & Engineering Challenge */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Cpu className="size-4" /> 01 // THE INDUSTRIAL CHALLENGE
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              Eliminating Material Waste & Manual Estimation
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Industrial aluminum fabrication relies on expensive 6.5-meter raw extrusion bars. Traditionally, fabricators
              calculated window cuts manually using spreadsheets or manual bench chalk. This caused:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
              <li>Up to 20% residual aluminum scrap due to non-optimized cutting combinations.</li>
              <li>Blade kerf loss (3mm per cut) and 45° angle miter inaccuracies causing misfits.</li>
              <li>Discrepancies in per-m² price calculations due to volatile raw material market rates.</li>
              <li>Lag between window specifications and commercial customer invoices.</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcDashboard}
                  alt="Blue Coast Executive Dashboard"
                  caption="FIGURE 1.0: EXECUTIVE PRODUCTION ANALYTICS DASHBOARD"
                  badgeLabel="FIGURE 1.0"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                <span className="font-mono text-xs font-bold text-primary block">
                  FIGURE 1.0: EXECUTIVE PRODUCTION ANALYTICS DASHBOARD
                </span>
                <p className="font-body-sm text-xs text-muted-foreground mt-1">
                  Surfacing real-time extrusion linear meters consumed, active compound statistics, and historical market
                  price trends for aluminum and flat glass.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Deep Dive 1: Algorithmic Cut Plan Optimization */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Boxes className="size-4" /> 02 // ALGORITHMIC OPTIMIZATION
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              Best Decreasing Fit Bin-Packing Engine
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              How we mathematically optimized bar cutting schedules to save thousands of linear meters of aluminum extrusion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  <ZoomableImage
                    src={bcCutplan}
                    alt="Cut Plan Bar Optimization Layout"
                    caption="FIGURE 2.0: CUT PLAN BAR BIN-PACKING OPTIMIZATION LAYOUT"
                    badgeLabel="FIGURE 2.0"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                  <span className="font-mono text-xs font-bold text-primary block">
                    FIGURE 2.0: CUT PLAN BAR BIN-PACKING OPTIMIZATION LAYOUT
                  </span>
                  <p className="font-body-sm text-xs text-muted-foreground mt-1">
                    Visual cut map showing individual piece assignments per 6.5m stock bar with kerf offset, angle indicators,
                    and scrap percentage calculation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface-container p-4 border border-border space-y-2">
                <span className="font-mono text-xs font-bold text-primary uppercase">ALGORITHM HIGHLIGHTS:</span>
                <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4 marker:text-secondary-foreground">
                  <li>
                    <strong className="text-foreground">Kerf Deduction:</strong> Subtracts exact saw blade kerf thickness (typically 3mm-4mm) on each cut slice.
                  </li>
                  <li>
                    <strong className="text-foreground">Miter Angle Offsets:</strong> Computes true bar lengths factoring in 45° vs 90° profile corner joints.
                  </li>
                  <li>
                    <strong className="text-foreground">Scrap Minimization:</strong> Re-sorts window schedules across whole batches to fill residual stock segments before opening new bars.
                  </li>
                  <li>
                    <strong className="text-foreground">Output Visuals:</strong> Generates workshop cutting sheets that saw operators follow directly on the fabrication floor.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Deep Dive 2: Parametric Window Pricing Engine */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Calculator className="size-4" /> 03 // FINANCIAL ENGINE
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              Parametric Window Cost & Quotation Calculator
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              Dynamic cost aggregation across raw aluminum weight, glass surface area, hardware accessories, and fabrication margins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fabricators need instantaneous pricing when bidding on major commercial compounds. The calculation engine
                uses a builder pattern to dynamically derive the manufacturing cost and selling price per square meter:
              </p>
              <div className="bg-surface-container p-4 border border-border space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Extrusion Weights:</strong> Aggregates profile linear weights (kg/m) across frame, sash, interlock, and bead.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Glass Sizing:</strong> Calculates exact glazed area based on sash clearance with single/double-glazed allowance.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Overhead & Profit:</strong> Configurable percentage markups for transportation, installation, scrap allowance, and operating margin.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  <ZoomableImage
                    src={bcCalculator}
                    alt="Window Cost Calculator Interface"
                    caption="FIGURE 3.0: PARAMETRIC WINDOW COST ESTIMATOR"
                    badgeLabel="FIGURE 3.0"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                  <span className="font-mono text-xs font-bold text-primary block">
                    FIGURE 3.0: PARAMETRIC WINDOW COST ESTIMATOR
                  </span>
                  <p className="font-body-sm text-xs text-muted-foreground mt-1">
                    Allows estimators to specify window model, dimensions, quantity, and profile system to automatically
                    calculate total and per-square-meter manufacturing cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Deep Dive 3: Architecture, Invoicing & Hierarchy */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Layers className="size-4" /> 04 // ENTERPRISE SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              Site Hierarchy, Invoicing & Reports
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              From multi-compound architectural breakdowns to bilingual Arabic RTL PDF invoice generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-surface-container border-border clip-chamfer overflow-hidden">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcHierarchy}
                  alt="Compound Site Hierarchy"
                  caption="FIGURE 4.0: ARCHITECTURAL SITE HIERARCHY (COMPOUND MURUJ)"
                  badgeLabel="FIGURE 4.0"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <span className="font-mono text-xs font-bold text-primary uppercase block">
                  ARCHITECTURAL SITE HIERARCHY
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Structures manufacturing orders into Compounds → Buildings → Floors → Apartments → Window schedules,
                  allowing drill-down tracking of material usage per individual flat or building block.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer overflow-hidden">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcInvoices}
                  alt="Invoices Ledger"
                  caption="FIGURE 5.0: COMMERCIAL INVOICING & RTL PDF REPORTS"
                  badgeLabel="FIGURE 5.0"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <span className="font-mono text-xs font-bold text-primary uppercase block">
                  COMMERCIAL INVOICING & RTL PDF REPORTS
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Generates commercial invoices linked directly to window cut schedules. Produces Arabic RTL PDF reports
                  using pdfmake with Cairo font integration for workshop and executive client presentations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Tech Stack Summary for Recruiters */}
        <section className="bg-surface-container p-6 sm:p-8 border border-border clip-chamfer space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            <h3 className="font-headline-sm text-xl font-bold uppercase text-foreground">
              Technical Stack & Engineering Highlights Summary
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">BACKEND</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• NestJS (Modular Architecture)</li>
                <li>• TypeScript & Node.js</li>
                <li>• TypeORM Migrations & Seeders</li>
                <li>• JWT Auth & Global RBAC Guards</li>
                <li>• pdfmake (Arabic Cairo RTL)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">DATABASE</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• PostgreSQL 16</li>
                <li>• Normalized Schema Design</li>
                <li>• Historical Price Logs</li>
                <li>• Aggregated Analytical Queries</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">DESKTOP CLIENT</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Electron 30</li>
                <li>• React 18 & TypeScript</li>
                <li>• Vite Build Pipeline</li>
                <li>• TailwindCSS v4 & Radix UI</li>
                <li>• TanStack Query & Zustand</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">DEVOPS & TOOLS</span>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Docker & Docker Compose</li>
                <li>• Caddy Reverse Proxy</li>
                <li>• Python Cut Plan Integration</li>
                <li>• Git Workflow</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <div className="bg-surface-container-low border border-border p-6 flex flex-wrap items-center justify-between gap-4 clip-chamfer">
          <div>
            <span className="font-mono text-xs text-primary font-bold uppercase block">
              INTERESTED IN DISCUSSING THIS PROJECT OR HIRING ZEYAD?
            </span>
            <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">
              Zeyad Hesham is available for Full-Stack, Backend, and Distributed Systems roles.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 border-border hover:border-primary cursor-pointer"
            >
              [ ← BACK TO PORTFOLIO ]
            </Button>

            <Button
              variant="default"
              asChild
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 gap-2 cursor-pointer shadow-md"
            >
              <a href="mailto:zeyadhesham176@gmail.com">
                <Mail className="size-3.5" />
                [ PING // EMAIL ]
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
            >
              <a href="https://linkedin.com/in/zedoh" target="_blank" rel="noreferrer">
                <LinkedinIcon className="size-3.5" />
                [ LINKEDIN ]
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

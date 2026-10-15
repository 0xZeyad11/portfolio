import React, { type SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ZoomableImage } from "@/components/ZoomableImage";
import { TechIcon } from "@/components/common/TechIcon";

// Showcase images
import bcDashboard from "@/assets/bluecoast showcase/02_dashboard_overview.png";
import bcBatches from "@/assets/bluecoast showcase/08_production_batches.png";
import bcHierarchy from "@/assets/bluecoast showcase/07_compound_details_muruj.png";
import bcCutplan from "@/assets/bluecoast showcase/09_batch_cutplan_details.png";
import bcCalculator from "@/assets/bluecoast showcase/18_window_calculator.png";
import bcInvoices from "@/assets/bluecoast showcase/17_invoices_list.png";

// Lucide Icons
import {
  ArrowLeft,
  Cpu,
  Layers,
  FileText,
  Mail,
  CheckCircle2,
  Boxes,
  Calculator,
  ShieldCheck,
  Languages,
} from "lucide-react";
import { useEmailModal } from "@/context/EmailModalContext";
import { useLanguage } from "@/context/LanguageContext";

interface BlueCoastDetailsProps {
  onBack: () => void;
}

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const BlueCoastDetails: React.FC<BlueCoastDetailsProps> = ({ onBack }) => {
  const { openEmailModal } = useEmailModal();
  const { t, language, toggleLanguage } = useLanguage();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface font-body-md pb-24 antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="group font-space text-xs uppercase font-bold tracking-wider border-border hover:border-primary text-foreground hover:text-primary clip-chamfer gap-2 h-9 px-3 sm:px-3.5 cursor-pointer shrink-0"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform duration-200" />
            <span className="hidden sm:inline">{t("caseStudy.back", "[ RETURN TO PORTFOLIO ]")}</span>
            <span className="sm:hidden">{t("caseStudy.back", "[ RETURN ]")}</span>
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {t("caseStudy.badge", "CASE STUDY // ENTERPRISE DESKTOP SUITE")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-mono text-xs font-bold uppercase tracking-wider border-border hover:border-primary text-primary clip-chamfer gap-1.5 h-9 px-2.5 sm:px-3 cursor-pointer"
              title="Switch Language / تغيير اللغة"
            >
              <Languages className="size-3.5 text-primary" />
              <span>{language === "en" ? "عربي" : "EN"}</span>
            </Button>

            <Button
              variant="default"
              onClick={() => openEmailModal("Blue Coast ERP Inquiry // Zeyad Hesham")}
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 cursor-pointer shadow-md"
            >
              <Mail className="size-3.5" />
              <span className="hidden sm:inline">{t("overview.buttons.email", "[ CONTACT ZEYAD ]")}</span>
              <span className="sm:hidden">CONTACT</span>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
            >
              <a href="#/cv">
                <FileText className="size-3.5" />
                <span className="hidden sm:inline">{t("nav.viewCv", "[ VIEW CV ]")}</span>
                <span className="sm:hidden">CV</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default" className="font-space text-xs font-bold uppercase py-1 px-3">
              {t("caseStudy.badge", "ENTERPRISE DESKTOP ERP")}
            </Badge>
            <Badge variant="secondary" className="font-space text-xs font-bold uppercase py-1 px-3 text-secondary-foreground">
              {t("caseStudy.role", "ROLE: SOFTWARE ENGINEER")}
            </Badge>
            <Badge variant="outline" className="font-space text-xs font-bold uppercase py-1 px-3 border-border text-muted-foreground">
              {t("experience.period", "JAN 2026 - PRESENT")}
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl uppercase font-bold tracking-tight text-primary">
              Blue Coast OS
            </h1>
            <p className="font-headline-sm text-lg sm:text-xl text-secondary-foreground font-mono">
              {t("caseStudy.heroTitle", "BLUE COAST OS: INDUSTRIAL PRODUCTION MANAGEMENT SUITE")}
            </p>
            <p className="font-body-lg text-base sm:text-lg text-muted-foreground max-w-4xl leading-relaxed pt-2">
              {t("caseStudy.heroSub", "An end-to-end desktop ERP software solution engineered to digitize aluminum & glass manufacturing facilities, eliminate profile scrap through linear cut-plan optimization heuristics, and automate multi-system pricing.")}
            </p>

            {/* Core Tech Stack Badges with Icons */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block"></span>
                {t("caseStudy.deployedTech", "DEPLOYED TECHNOLOGIES & TOOLS:")}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="NestJS" className="size-3.5 text-primary" /> NestJS 10
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="TypeScript" className="size-3.5 text-primary" /> TypeScript
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="PostgreSQL" className="size-3.5 text-primary" /> PostgreSQL 16
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="TypeORM" className="size-3.5 text-primary" /> TypeORM
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Docker" className="size-3.5 text-primary" /> Docker & Compose
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Python" className="size-3.5 text-primary" /> Python (PyBinPack)
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Caddy" className="size-3.5 text-primary" /> Caddy Proxy
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="JWT" className="size-3.5 text-primary" /> JWT & RBAC
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="PDF" className="size-3.5 text-primary" /> pdfmake RTL
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Electron" className="size-3.5 text-secondary-foreground" /> Electron 30
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="React" className="size-3.5 text-secondary-foreground" /> React 18
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="TailwindCSS" className="size-3.5 text-secondary-foreground" /> TailwindCSS
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Vite" className="size-3.5 text-secondary-foreground" /> Vite
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container text-foreground border-border px-2.5 py-1 gap-1.5 shadow-sm">
                  <TechIcon name="Git" className="size-3.5 text-secondary-foreground" /> Git
                </Badge>
              </div>
            </div>
          </div>

          {/* Project Overview Showcase Image */}
          <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-2xl">
            <div className="aspect-[16/9] sm:aspect-[21/9] bg-black/60 relative overflow-hidden group">
              <ZoomableImage
                src={bcDashboard}
                alt="Blue Coast OS Production Management Overview"
                caption={t("caseStudy.overviewCaption", "BLUE COAST OS: INDUSTRIAL PRODUCTION MANAGEMENT SUITE & OVERVIEW DASHBOARD")}
                badgeLabel={t("caseStudy.overviewBadge", "PROJECT OVERVIEW")}
                className="w-full h-full object-cover object-top"
                wrapperClassName="w-full h-full"
              />
            </div>
            <div className="p-3 bg-surface-container-low/80 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-2 text-primary font-bold">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                {t("caseStudy.runtime", "SYSTEM RUNTIME // PRODUCTION DASHBOARD OVERVIEW")}
              </span>
              <span className="text-muted-foreground font-mono text-[11px]">
                {t("caseStudy.runtimeSub", "15+ NESTJS BACKEND DOMAINS • 7,310.6M LINEAR METERS TRACKED")}
              </span>
            </div>
          </Card>

          {/* Quick Metrics HUD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">{t("caseStudy.metrics.backend", "BACKEND DOMAINS")}</span>
              <span className="font-headline-md text-2xl font-bold text-primary font-mono mt-1 block">{t("caseStudy.metrics.backendVal", "15+ Modules")}</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">{t("caseStudy.metrics.backendSub", "Modular NestJS architecture")}</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">{t("caseStudy.metrics.optimizer", "CUT OPTIMIZATION")}</span>
              <span className="font-headline-md text-2xl font-bold text-secondary-foreground font-mono mt-1 block">{t("caseStudy.metrics.optimizerVal", "Bin-Packing")}</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">{t("caseStudy.metrics.optimizerSub", "Best Decreasing Fit scrap minimization")}</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">{t("caseStudy.metrics.systems", "SUPPORTED SYSTEMS")}</span>
              <span className="font-headline-md text-2xl font-bold text-primary font-mono mt-1 block">{t("caseStudy.metrics.systemsVal", "4 Architectural")}</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">{t("caseStudy.metrics.systemsSub", "PS 9600, 6600, 4800, Sonata 45")}</span>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer p-4">
              <span className="font-mono text-[11px] text-muted-foreground uppercase block">{t("caseStudy.metrics.deployment", "DEPLOYMENT")}</span>
              <span className="font-headline-md text-2xl font-bold text-secondary-foreground font-mono mt-1 block">{t("caseStudy.metrics.deploymentVal", "Dockerized")}</span>
              <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">{t("caseStudy.metrics.deploymentSub", "PostgreSQL + NestJS + Caddy")}</span>
            </Card>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* The Problem & Engineering Challenge */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Cpu className="size-4" /> {t("caseStudy.section1.badge", "01 // THE INDUSTRIAL CHALLENGE")}
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              {t("caseStudy.section1.title", "Eliminating Material Waste & Manual Estimation")}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("caseStudy.section1.desc", "Industrial aluminum fabrication relies on expensive 6.5-meter raw extrusion bars...")}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc ps-5 marker:text-primary">
              <li>{t("caseStudy.section1.bullet1", "Up to 20% residual aluminum scrap due to non-optimized cutting combinations.")}</li>
              <li>{t("caseStudy.section1.bullet2", "Blade kerf loss (3mm per cut) and 45° angle miter inaccuracies causing misfits.")}</li>
              <li>{t("caseStudy.section1.bullet3", "Discrepancies in per-m² price calculations due to volatile raw material market rates.")}</li>
              <li>{t("caseStudy.section1.bullet4", "Lag between window specifications and commercial customer invoices.")}</li>
            </ul>

            {/* Key Bottlenecks Solved Mini HUD */}
            <div className="p-3.5 bg-surface-container border border-border clip-chamfer grid grid-cols-2 gap-3 mt-4">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase block">{t("caseStudy.section1.scrapTitle", "SCRAP REDUCTION")}</span>
                <span className="font-mono text-base font-bold text-primary block mt-0.5">{t("caseStudy.section1.scrapVal", "~20% → <6%")}</span>
                <span className="font-mono text-[10px] text-muted-foreground block">{t("caseStudy.section1.scrapSub", "Algorithmic bar packing")}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase block">{t("caseStudy.section1.kerfTitle", "KERF TOLERANCE")}</span>
                <span className="font-mono text-base font-bold text-secondary-foreground block mt-0.5">{t("caseStudy.section1.kerfVal", "3.0mm Exact")}</span>
                <span className="font-mono text-[10px] text-muted-foreground block">{t("caseStudy.section1.kerfSub", "Miter 45° deduction")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcBatches}
                  alt="Blue Coast Batch Production & Management"
                  caption={t("caseStudy.section1.fig1Caption", "FIGURE 1.0: BATCH PRODUCTION SCHEDULING & FABRICATION PROGRESS")}
                  badgeLabel={t("caseStudy.section1.fig1Badge", "FIGURE 1.0")}
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                <span className="font-mono text-xs font-bold text-primary block">
                  {t("caseStudy.section1.fig1Caption", "FIGURE 1.0: BATCH PRODUCTION SCHEDULING & FABRICATION PROGRESS")}
                </span>
                <p className="font-body-sm text-xs text-muted-foreground mt-1">
                  {t("caseStudy.section1.fig1Desc", "Tracking active manufacturing cut plan batches across compounds, units, and real-time operator progress.")}
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
              <Boxes className="size-4" /> {t("caseStudy.section2.badge", "02 // ALGORITHMIC OPTIMIZATION")}
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              {t("caseStudy.section2.title", "Best Decreasing Fit Bin-Packing Engine")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              {t("caseStudy.section2.desc", "How we mathematically optimized bar cutting schedules to save thousands of linear meters of aluminum extrusion.")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  <ZoomableImage
                    src={bcCutplan}
                    alt="Cut Plan Bar Optimization Layout"
                    caption={t("caseStudy.section2.fig2Caption", "FIGURE 2.0: CUT PLAN BAR BIN-PACKING OPTIMIZATION LAYOUT")}
                    badgeLabel={t("caseStudy.section2.fig2Badge", "FIGURE 2.0")}
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                  <span className="font-mono text-xs font-bold text-primary block">
                    {t("caseStudy.section2.fig2Caption", "FIGURE 2.0: CUT PLAN BAR BIN-PACKING OPTIMIZATION LAYOUT")}
                  </span>
                  <p className="font-body-sm text-xs text-muted-foreground mt-1">
                    {t("caseStudy.section2.fig2Desc", "Visual cut map showing individual piece assignments per 6.5m stock bar with kerf offset, angle indicators, and scrap percentage calculation.")}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface-container p-4 border border-border clip-chamfer space-y-2">
                <span className="font-mono text-xs font-bold text-primary uppercase">{t("caseStudy.section2.algoTitle", "ALGORITHM HIGHLIGHTS:")}</span>
                <ul className="text-xs text-muted-foreground space-y-2 list-disc ps-4 marker:text-secondary-foreground">
                  <li>
                    <strong className="text-foreground">{t("caseStudy.section2.item1Label", "Kerf Deduction:")}</strong> {t("caseStudy.section2.item1Desc", "Subtracts exact saw blade kerf thickness on each cut slice.")}
                  </li>
                  <li>
                    <strong className="text-foreground">{t("caseStudy.section2.item2Label", "Miter Angle Offsets:")}</strong> {t("caseStudy.section2.item2Desc", "Computes true bar lengths factoring in 45° vs 90° profile corner joints.")}
                  </li>
                  <li>
                    <strong className="text-foreground">{t("caseStudy.section2.item3Label", "Scrap Minimization:")}</strong> {t("caseStudy.section2.item3Desc", "Re-sorts window schedules across whole batches to fill residual stock segments.")}
                  </li>
                  <li>
                    <strong className="text-foreground">{t("caseStudy.section2.item4Label", "Output Visuals:")}</strong> {t("caseStudy.section2.item4Desc", "Generates workshop cutting sheets that saw operators follow directly.")}
                  </li>
                </ul>
              </div>

              {/* Optimization Math & Yield Metrics HUD */}
              <div className="bg-surface-container-low p-4 border border-border clip-chamfer space-y-2.5">
                <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">
                  {t("caseStudy.section2.benchmarkTitle", "OPTIMIZATION BENCHMARK & HEURISTICS:")}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-surface-container/80 p-2.5 border border-border/60">
                    <span className="text-[10px] text-muted-foreground block">{t("caseStudy.section2.yieldLabel", "YIELD EFFICIENCY")}</span>
                    <span className="text-base font-bold text-primary block mt-0.5">{t("caseStudy.section2.yieldVal", "94.2%")}</span>
                    <span className="text-[9px] text-muted-foreground block">{t("caseStudy.section2.yieldSub", "Blue Coast Engine")}</span>
                  </div>
                  <div className="bg-surface-container/80 p-2.5 border border-border/60">
                    <span className="text-[10px] text-muted-foreground block">{t("caseStudy.section2.manualLabel", "INDUSTRY MANUAL")}</span>
                    <span className="text-base font-bold text-muted-foreground block mt-0.5">{t("caseStudy.section2.manualVal", "~78.0%")}</span>
                    <span className="text-[9px] text-muted-foreground block">{t("caseStudy.section2.manualSub", "Traditional Spreadsheets")}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-muted-foreground leading-relaxed pt-1 border-t border-border/50">
                  {t("caseStudy.section2.formulation", "Formulation: 1D First-Fit Decreasing (FFD) heuristics with discrete piece sorting across entire building batches against 6,500mm standard extrusion stock.")}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="bg-border" />

        {/* Deep Dive 2: Parametric Window Pricing Engine */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-widest flex items-center gap-2">
              <Calculator className="size-4" /> {t("caseStudy.section3.badge", "03 // FINANCIAL ENGINE")}
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              {t("caseStudy.section3.title", "Parametric Window Cost & Quotation Calculator")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              {t("caseStudy.section3.desc", "Dynamic cost aggregation across raw aluminum weight, glass surface area, hardware accessories, and fabrication margins.")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("caseStudy.section3.lead", "Fabricators need instantaneous pricing when bidding on major commercial compounds. The calculation engine uses a builder pattern to dynamically derive the manufacturing cost and selling price per square meter:")}
              </p>
              <div className="bg-surface-container p-4 border border-border clip-chamfer space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">{t("caseStudy.section3.item1Label", "Extrusion Weights:")}</strong> {t("caseStudy.section3.item1Desc", "Aggregates profile linear weights across frame, sash, interlock, and bead.")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">{t("caseStudy.section3.item2Label", "Glass Sizing:")}</strong> {t("caseStudy.section3.item2Desc", "Calculates exact glazed area based on sash clearance with single/double-glazed allowance.")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground">{t("caseStudy.section3.item3Label", "Overhead & Profit:")}</strong> {t("caseStudy.section3.item3Desc", "Configurable percentage markups for transportation, installation, scrap allowance, and operating margin.")}
                  </span>
                </div>
              </div>

              {/* Parametric Cost Derivation HUD */}
              <div className="bg-surface-container-low p-3.5 border border-border clip-chamfer space-y-2 font-mono">
                <span className="text-[11px] font-bold text-secondary-foreground uppercase block">
                  {t("caseStudy.section3.derivationTitle", "PARAMETRIC COST DERIVATION:")}
                </span>
                <div className="p-2 bg-surface-container border border-border/60 text-[11px] text-muted-foreground space-y-1">
                  <div>• {t("caseStudy.section3.rowExtrusion", "Extrusion: Profile linear kg/m × Raw Aluminum EGP/ton")}</div>
                  <div>• {t("caseStudy.section3.rowGlass", "Glass: Clear/Tinted sqm × Per-sqm Sheet Rate")}</div>
                  <div>• {t("caseStudy.section3.rowAccessories", "Accessories: Rollers, wool piles, gaskets, corner joints")}</div>
                  <div>• {t("caseStudy.section3.rowMarkups", "Markups: Configurable scrap %, transport & operating margin")}</div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] text-muted-foreground uppercase">{t("caseStudy.section3.systemsLabel", "SYSTEMS:")}</span>
                  <Badge variant="outline" className="font-space font-bold text-[10px] py-0 px-1.5 border-primary/50 text-primary">PS 9600</Badge>
                  <Badge variant="outline" className="font-space font-bold text-[10px] py-0 px-1.5 border-border">PS 6600</Badge>
                  <Badge variant="outline" className="font-space font-bold text-[10px] py-0 px-1.5 border-border">PS 4800</Badge>
                  <Badge variant="outline" className="font-space font-bold text-[10px] py-0 px-1.5 border-border">Sonata 45</Badge>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="bg-surface-container border-border overflow-hidden clip-chamfer shadow-xl">
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  <ZoomableImage
                    src={bcCalculator}
                    alt="Window Cost Calculator Interface"
                    caption={t("caseStudy.section3.fig3Caption", "FIGURE 3.0: PARAMETRIC WINDOW COST ESTIMATOR")}
                    badgeLabel={t("caseStudy.section3.fig3Badge", "FIGURE 3.0")}
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-surface-container-low/70 border-t border-border">
                  <span className="font-mono text-xs font-bold text-primary block">
                    {t("caseStudy.section3.fig3Caption", "FIGURE 3.0: PARAMETRIC WINDOW COST ESTIMATOR")}
                  </span>
                  <p className="font-body-sm text-xs text-muted-foreground mt-1">
                    {t("caseStudy.section3.fig3Desc", "Allows estimators to specify window model, dimensions, quantity, and profile system to automatically calculate total and per-square-meter manufacturing cost.")}
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
              <Layers className="size-4" /> {t("caseStudy.section4.badge", "04 // ENTERPRISE SYSTEM ARCHITECTURE")}
            </span>
            <h2 className="font-headline-md text-2xl font-bold uppercase text-foreground">
              {t("caseStudy.section4.title", "Site Hierarchy, Invoicing & Reports")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              {t("caseStudy.section4.desc", "From multi-compound architectural breakdowns to bilingual Arabic RTL PDF invoice generation.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-surface-container border-border clip-chamfer overflow-hidden">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcHierarchy}
                  alt="Compound Site Hierarchy"
                  caption={t("caseStudy.section4.fig4Caption", "FIGURE 4.0: ARCHITECTURAL SITE HIERARCHY (COMPOUND MURUJ)")}
                  badgeLabel={t("caseStudy.section4.fig4Badge", "FIGURE 4.0")}
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <span className="font-mono text-xs font-bold text-primary uppercase block">
                  {t("caseStudy.section4.fig4Title", "ARCHITECTURAL SITE HIERARCHY")}
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {t("caseStudy.section4.fig4Desc", "Structures manufacturing orders into Compounds → Buildings → Floors → Apartments → Window schedules, allowing drill-down tracking of material usage per individual flat or building block.")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface-container border-border clip-chamfer overflow-hidden">
              <div className="aspect-video bg-black/60 relative overflow-hidden">
                <ZoomableImage
                  src={bcInvoices}
                  alt="Invoices Ledger"
                  caption={t("caseStudy.section4.fig5Caption", "FIGURE 5.0: COMMERCIAL INVOICING & RTL PDF REPORTS")}
                  badgeLabel={t("caseStudy.section4.fig5Badge", "FIGURE 5.0")}
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <span className="font-mono text-xs font-bold text-primary uppercase block">
                  {t("caseStudy.section4.fig5Title", "COMMERCIAL INVOICING & RTL PDF REPORTS")}
                </span>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {t("caseStudy.section4.fig5Desc", "Generates commercial invoices linked directly to window cut schedules. Produces Arabic RTL PDF reports using pdfmake with Cairo font integration for workshop and executive client presentations.")}
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
              {t("caseStudy.summary.title", "Technical Stack & Engineering Highlights Summary")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">
                {t("caseStudy.summary.backendTitle", "BACKEND ARCHITECTURE")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="NestJS" className="size-3.5 text-primary" /> NestJS 10
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="TypeScript" className="size-3.5 text-primary" /> TypeScript
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Node.js" className="size-3.5 text-primary" /> Node.js
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="TypeORM" className="size-3.5 text-primary" /> TypeORM
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="JWT" className="size-3.5 text-primary" /> JWT & RBAC
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="PDF" className="size-3.5 text-primary" /> pdfmake RTL
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed pt-1">
                {t("caseStudy.summary.backendDesc", "Modular architecture with 15+ domains, TypeORM migrations, and seeders.")}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">
                {t("caseStudy.summary.databaseTitle", "DATABASE ENGINE")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="PostgreSQL" className="size-3.5 text-primary" /> PostgreSQL 16
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="SQL" className="size-3.5 text-primary" /> Normalized SQL
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed pt-1">
                {t("caseStudy.summary.databaseDesc", "Historical material price logging, audit tracking, and aggregated analytics.")}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">
                {t("caseStudy.summary.desktopTitle", "DESKTOP CLIENT")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Electron" className="size-3.5 text-secondary-foreground" /> Electron 30
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="React" className="size-3.5 text-secondary-foreground" /> React 18
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Vite" className="size-3.5 text-secondary-foreground" /> Vite
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="TailwindCSS" className="size-3.5 text-secondary-foreground" /> TailwindCSS
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Radix" className="size-3.5 text-secondary-foreground" /> Radix UI
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed pt-1">
                {t("caseStudy.summary.desktopDesc", "High-performance desktop native client with reactive state and fast cache.")}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-secondary-foreground uppercase block">
                {t("caseStudy.summary.devopsTitle", "DEVOPS & TOOLS")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Docker" className="size-3.5 text-secondary-foreground" /> Docker Compose
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Caddy" className="size-3.5 text-secondary-foreground" /> Caddy Proxy
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Python" className="size-3.5 text-secondary-foreground" /> Python
                </Badge>
                <Badge variant="outline" className="font-space font-bold text-xs bg-surface-container-low text-foreground border-border py-1 px-2.5 gap-1.5">
                  <TechIcon name="Git" className="size-3.5 text-secondary-foreground" /> Git
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground font-mono leading-relaxed pt-1">
                {t("caseStudy.summary.devopsDesc", "Containerized local and staging deployments with automated reverse proxy.")}
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <div className="bg-surface-container-low border border-border p-6 flex flex-wrap items-center justify-between gap-4 clip-chamfer">
          <div>
            <span className="font-mono text-xs text-primary font-bold uppercase block">
              {t("caseStudy.cta.title", "INTERESTED IN DISCUSSING THIS PROJECT OR HIRING ZEYAD?")}
            </span>
            <span className="font-body-sm text-xs text-muted-foreground mt-0.5 block">
              {t("caseStudy.cta.sub", "Zeyad Hesham is available for Full-Stack, Backend, and Distributed Systems roles.")}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="group font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 gap-2 border-border hover:border-primary text-foreground hover:text-primary cursor-pointer shadow-md"
            >
              <ArrowLeft className="size-3.5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform duration-200" />
              <span>{t("caseStudy.cta.return", "[ RETURN TO PORTFOLIO ]")}</span>
            </Button>

            <Button
              variant="default"
              onClick={() => openEmailModal("Blue Coast OS Inquiry // Zeyad Hesham")}
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 gap-2 cursor-pointer shadow-md"
            >
              <Mail className="size-3.5" />
              {t("caseStudy.cta.email", "[ PING // EMAIL ]")}
            </Button>

            <Button
              variant="secondary"
              asChild
              className="font-mono text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-4 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
            >
              <a href="https://linkedin.com/in/zedoh" target="_blank" rel="noreferrer">
                <LinkedinIcon className="size-3.5" />
                {t("caseStudy.cta.linkedin", "[ LINKEDIN ]")}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

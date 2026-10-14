import { useState, useMemo, useEffect, type SVGProps } from "react";
import profilePic from "./assets/profile-pic.png";
import kitchenlyPic from "./assets/kitchenly.jpg";
import restaurantPic from "./assets/restaurant.jpg";
import { BlueCoastDetails } from "@/pages/BlueCoastDetails";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Lucide Icons
import {
  Terminal,
  Server,
  Database,
  Layers,
  ExternalLink,
  Mail,
  FileDown,
  Search,
  CheckCircle2,
  Copy,
  FolderGit2,
  Activity,
  Code2,
} from "lucide-react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const cvUrl = new URL("../assets/Zeyad_Hesham_FullStack.pdf", import.meta.url).href;

interface Project {
  id: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  status: string;
  statusVariant: "default" | "secondary" | "destructive" | "outline";
  linkText: string;
  linkUrl: string;
  linkVariant: "default" | "secondary" | "destructive" | "outline";
}

const PROJECTS_DATA: Project[] = [
  {
    id: "kitchenly",
    tag: "PRJ_01 // KITCHENLY",
    title: "PROJECT // KITCHENLY",
    category: "FOOD ORDERING & REALTIME TRACKING",
    description:
      "Modular REST API with 28+ endpoints for users, menus, orders, and payments. Implemented JWT authentication and RBAC. Integrated Stripe payment processing. Built real-time order tracking using WebSockets (Socket.io). Developed geospatial search using PostGIS. Designed normalized PostgreSQL schema with Prisma ORM. Generated OpenAPI (Swagger) specs.",
    image: kitchenlyPic,
    technologies: ["Express.js", "PostgreSQL", "Prisma", "PostGIS", "WebSockets", "Stripe"],
    status: "STATUS: SOURCE_AVAILABLE",
    statusVariant: "default",
    linkText: "VIEW GITHUB",
    linkUrl: "https://github.com/0xZeyad11/Kitchenly",
    linkVariant: "default",
  },
  {
    id: "restaurant-api",
    tag: "PRJ_02 // FOOD PLATFORM",
    title: "RESTAURANT API",
    category: "MULTI-ROLE ORDERING ENGINE",
    description:
      "Built a RESTful API for a food delivery platform using Node.js, Express, and MongoDB. Implemented JWT authentication and role-based authorization (RBAC) across client, admin, vendor, and driver roles. Modeled scalable NoSQL schemas using Mongoose.",
    image: restaurantPic,
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT / RBAC"],
    status: "STATUS: ACTIVE",
    statusVariant: "secondary",
    linkText: "VIEW GITHUB",
    linkUrl: "https://github.com/0xZeyad11/Restaurant---Backend-API",
    linkVariant: "secondary",
  },
  {
    id: "termadoro",
    tag: "PRJ_03 // CLI TOOL",
    title: "TERMADORO",
    category: "DEVELOPER PRODUCTIVITY",
    description:
      "Developed and published a cross-platform CLI productivity tool on npm for Pomodoro-based time tracking with tagging and session analytics. Designed interactive terminal workflows with real-time controls and desktop notifications.",
    technologies: ["NPM", "CLI", "Terminal", "Node.js", "TypeScript"],
    status: "PUBLISHED",
    statusVariant: "destructive",
    linkText: "NPMJS.COM",
    linkUrl: "https://www.npmjs.com/package/termadoro",
    linkVariant: "destructive",
  },
];

function App() {
  const [currentRoute, setCurrentRoute] = useState<"home" | "blue-coast">(() => {
    return typeof window !== "undefined" &&
      (window.location.hash.startsWith("#/blue-coast") || window.location.hash.startsWith("#/bluecoast"))
      ? "blue-coast"
      : "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#/blue-coast") || window.location.hash.startsWith("#/bluecoast")) {
        setCurrentRoute("blue-coast");
      } else {
        setCurrentRoute("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateToBlueCoast = () => {
    window.location.hash = "/blue-coast";
    setCurrentRoute("blue-coast");
  };

  const navigateToHome = () => {
    window.location.hash = "#experience";
    setCurrentRoute("home");
  };

  const [activeSection, setActiveSection] = useState<"overview" | "experience" | "projects">("overview");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleNavClick = (section: "overview" | "experience" | "projects") => {
    if (activeSection === section) return;
    setIsTransitioning(true);
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("zeyadhesham176@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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

  if (currentRoute === "blue-coast") {
    return (
      <TooltipProvider delayDuration={150}>
        <BlueCoastDetails onBack={navigateToHome} />
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider delayDuration={150}>
      <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary selection:text-primary-foreground min-h-screen pb-16">
        {/* Hacky Screen Glitch Overlay */}
        <div
          className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-200 flex items-center justify-center bg-surface-container-lowest/90 backdrop-blur-sm ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
          <span className="font-mono text-primary text-xl font-bold tracking-[0.5em] animate-pulse relative z-10 ml-[0.5em]">
            UPLINKING...
          </span>
        </div>

        {/* Global Fixed Header */}
        <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-border shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
          <div className="h-20 w-full px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm uppercase font-bold tracking-tight text-primary">
                    ZEYAD HESHAM
                  </span>
                  <Badge variant="destructive" className="font-mono font-bold tracking-widest text-[10px] px-2 py-0.5 uppercase">
                    FULLSTACK ENGINEER
                  </Badge>
                </div>
                <span className="hidden xl:inline-block font-label-md text-label-md text-secondary-foreground font-mono tracking-widest">
                  // STATUS: OPEN-TO-WORK
                </span>
              </div>
            </div>

            {/* Navigation Tabs using Shadcn Tabs */}
            <nav className="flex items-center">
              <Tabs
                value={activeSection}
                onValueChange={(val) => handleNavClick(val as "overview" | "experience" | "projects")}
                className="w-auto"
              >
                <TabsList className="bg-surface-container-low border border-border p-1 gap-1">
                  <TabsTrigger
                    value="overview"
                    className="font-label-md text-xs uppercase px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all cursor-pointer"
                  >
                    OVERVIEW
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="font-label-md text-xs uppercase px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all cursor-pointer"
                  >
                    Experience Log
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="font-label-md text-xs uppercase px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all cursor-pointer"
                  >
                    Projects Stack
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </nav>
          </div>

          {/* Dynamic HUD Progress Bar */}
          <div className="h-1 w-full bg-surface-container flex">
            <div
              className="h-full bg-primary transition-all duration-700 ease-out"
              style={{
                width:
                  activeSection === "overview"
                    ? "33%"
                    : activeSection === "experience"
                      ? "66%"
                      : "100%",
              }}
            ></div>
            <div
              className="h-full bg-secondary-foreground transition-all duration-700 ease-out"
              style={{ width: activeSection === "projects" ? "0%" : "10%" }}
            ></div>
            <div className="h-full bg-surface-container-highest flex-1"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className={`w-full pt-28 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg flex flex-col overflow-hidden transition-all duration-300 ease-out ${
            isTransitioning ? "opacity-30 blur-sm grayscale translate-x-4 scale-[0.98]" : "opacity-100 blur-0 grayscale-0 translate-x-0 scale-100"
          }`}
        >
          {/* Top System Telemetry HUD Bar */}
          <section className="w-full flex flex-col gap-space-xs mb-space-lg">
            <div className="flex items-center justify-between flex-wrap gap-space-sm bg-surface-container-low border border-border px-space-md py-space-xs shadow-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold flex items-center gap-space-xs">
                  <span className="w-2 h-2 bg-primary inline-block animate-ping rounded-full"></span>
                  SYS.OP: Z.01 // OPERATIVE Overview
                </span>
                <span className="font-label-md text-label-md text-secondary-foreground font-mono font-bold uppercase tracking-wider">
                  :: BACKEND & FULLSTACK ARCHITECT
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-space-md font-label-sm text-label-sm text-muted-foreground font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-secondary-foreground font-bold">CPU</span>
                  <div className="flex gap-[2px]">
                    <div className="w-1.5 h-3 bg-secondary-foreground"></div>
                    <div className="w-1.5 h-3 bg-secondary-foreground opacity-80 animate-pulse"></div>
                    <div className="w-1.5 h-3 bg-secondary-foreground opacity-40"></div>
                    <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                    <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                  </div>
                  <span>42%</span>
                </div>
                <span className="text-surface-container-highest">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">RAM</span>
                  <div className="flex gap-[2px]">
                    <div className="w-1.5 h-3 bg-primary"></div>
                    <div className="w-1.5 h-3 bg-primary"></div>
                    <div className="w-1.5 h-3 bg-primary"></div>
                    <div className="w-1.5 h-3 bg-primary opacity-60 animate-pulse"></div>
                    <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                  </div>
                  <span>12GB</span>
                </div>
                <span className="text-surface-container-highest">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-secondary-foreground font-bold">PWR</span>
                  <div className="w-7 h-3 border border-secondary-foreground/50 p-[1px] flex gap-[1px]">
                    <div className="h-full w-full bg-secondary-foreground"></div>
                    <div className="h-full w-full bg-secondary-foreground"></div>
                    <div className="h-full w-full bg-secondary-foreground opacity-80 animate-pulse"></div>
                  </div>
                  <span>94%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bio-Monitor Operative Dossier Section */}
          <section
            id="overview"
            className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-space-md mb-space-xl items-stretch"
          >
            {/* Mugshot Tactical Card */}
            <div className="lg:col-span-3">
              <Card className="bg-surface-container border-border clip-chamfer shadow-xl relative group h-full flex flex-col justify-between">
                <CardHeader className="p-3 bg-surface-container-low border-b border-border flex flex-row items-center justify-between space-y-0">
                  <span className="font-label-sm text-primary font-bold tracking-widest uppercase">
                    BASE OF OPERATIONS
                  </span>
                  <Badge variant="outline" className="font-mono text-foreground font-bold border-border">
                    EGYPT
                  </Badge>
                </CardHeader>
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="relative w-4/5 mx-auto overflow-hidden flex items-center justify-center border border-border shadow-lg bg-surface-container-lowest">
                    <img
                      src={profilePic}
                      alt="Zeyad Hesham Profile"
                      className="w-full h-auto object-contain filter contrast-105"
                    />
                    <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between">
                      <div className="flex justify-start">
                        <Badge variant="outline" className="bg-surface-container-lowest/80 text-[8px] font-mono text-primary border-primary/40">
                          ID: ZH-99
                        </Badge>
                      </div>
                      <div className="flex justify-end">
                        <Badge variant="secondary" className="bg-surface-container-lowest/80 text-[8px] font-mono text-secondary-foreground flex items-center gap-1">
                          UPLINK
                          <span className="w-1.5 h-1.5 bg-secondary-foreground animate-ping rounded-full inline-block"></span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full bg-surface-container-low p-2 border border-border/50 text-center">
                    <span className="font-label-sm text-muted-foreground font-mono block">CLEARANCE LEVEL</span>
                    <span className="font-label-md text-primary font-bold font-mono">TIER-1 ARCHITECT</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Operative Spec Sheet Card */}
            <div className="lg:col-span-9">
              <Card className="bg-surface-container border-border clip-chamfer shadow-xl flex flex-col justify-between h-full">
                <div>
                  <CardHeader className="bg-surface-container-low/70 border-b border-border pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-secondary-foreground inline-block"></span>
                        <span className="font-label-md font-bold uppercase tracking-wider text-secondary-foreground">
                          SPEC_SHEET // BACKEND & FULLSTACK ARCHITECT
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-muted-foreground font-mono">CONTACT:</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={copyEmail}
                              className="font-mono font-bold text-xs h-7 px-3 gap-1.5 cursor-pointer"
                            >
                              {copiedEmail ? <CheckCircle2 className="size-3.5" /> : <Copy className="size-3.5" />}
                              zeyadhesham176@gmail.com
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copiedEmail ? "Copied to clipboard!" : "Click to copy email address"}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <CardTitle className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight text-primary">
                      ZEYAD HESHAM
                    </CardTitle>
                    <CardDescription className="font-title-md text-title-md text-secondary-foreground font-mono mt-1">
                      Full-Stack Engineer // NestJS • TypeScript • PostgreSQL • Docker • React
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-5 space-y-6">
                    <p className="font-body-lg text-body-lg text-muted-foreground max-w-3xl leading-relaxed">
                      Highly skilled Full-Stack Engineer specializing in scalable REST API design, robust backend
                      architecture using NestJS, TypeScript, Node.js, and PostgreSQL, and modern frontend development with
                      React, HTML, CSS, and Tailwind CSS. Proficient in developing production systems with JWT
                      authentication, role-based access control (RBAC), real-time communication via WebSockets, and
                      geospatial querying. Experienced in optimizing database schema design and orchestrating
                      containerized deployments with Docker, ensuring high performance and security.
                    </p>

                    <Separator className="bg-border" />

                    {/* Skills Matrix with Shadcn Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
                      {/* Languages */}
                      <div className="flex flex-col gap-space-sm">
                        <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-wider pb-1.5 border-b border-surface-container-highest flex items-center gap-1.5">
                          <Code2 className="size-3.5" /> Languages
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="default" className="font-mono text-xs font-bold uppercase py-1 px-3">
                            TypeScript
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs uppercase py-1 px-3">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            C++
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            SQL
                          </Badge>
                        </div>
                      </div>

                      {/* Backend & APIs */}
                      <div className="flex flex-col gap-space-sm">
                        <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-wider pb-1.5 border-b border-surface-container-highest flex items-center gap-1.5">
                          <Server className="size-3.5" /> Backend & APIs
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="default" className="font-mono text-xs font-bold uppercase py-1 px-3">
                            NestJS
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs uppercase py-1 px-3">
                            Node.js
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs uppercase py-1 px-3">
                            Express.js
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-primary/50 text-primary font-bold">
                            WebSockets
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-primary/50 text-primary font-bold">
                            JWT / RBAC
                          </Badge>
                        </div>
                      </div>

                      {/* Databases & ORMs */}
                      <div className="flex flex-col gap-space-sm">
                        <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-wider pb-1.5 border-b border-surface-container-highest flex items-center gap-1.5">
                          <Database className="size-3.5" /> Databases & ORMs
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="default" className="font-mono text-xs font-bold uppercase py-1 px-3">
                            PostgreSQL
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs uppercase py-1 px-3">
                            MongoDB
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            Prisma
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            TypeORM
                          </Badge>
                        </div>
                      </div>

                      {/* DevOps & Frontend */}
                      <div className="flex flex-col gap-space-sm">
                        <span className="font-label-md text-secondary-foreground font-mono uppercase tracking-wider pb-1.5 border-b border-surface-container-highest flex items-center gap-1.5">
                          <Layers className="size-3.5" /> DevOps & Frontend
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="default" className="font-mono text-xs font-bold uppercase py-1 px-3">
                            Docker
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs uppercase py-1 px-3">
                            Caddy
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            React
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs uppercase py-1 px-3 border-border">
                            Tailwind CSS
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Primary Action Buttons using Shadcn Button */}
                <CardFooter className="flex flex-wrap items-center gap-3 pt-6 border-t border-border bg-surface-container-low/40">
                  <Button
                    variant="default"
                    asChild
                    className="font-mono font-bold uppercase tracking-wider clip-chamfer h-10 px-5 gap-2 cursor-pointer shadow-lg hover:shadow-primary/25"
                  >
                    <a href="https://linkedin.com/in/zedoh" target="_blank" rel="noreferrer">
                      <LinkedinIcon className="size-4" />
                      [ JACK IN // LINKEDIN ]
                    </a>
                  </Button>

                  <Button
                    variant="secondary"
                    asChild
                    className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
                  >
                    <a href="https://github.com/0xZeyad11" target="_blank" rel="noreferrer">
                      <GithubIcon className="size-4" />
                      [ FETCH // GITHUB ]
                    </a>
                  </Button>

                  <Button
                    variant="destructive"
                    asChild
                    className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 cursor-pointer"
                  >
                    <a href="mailto:zeyadhesham176@gmail.com">
                      <Mail className="size-4" />
                      [ PING // EMAIL ]
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  >
                    <a href={cvUrl} download="Zeyad_Hesham_CV.pdf">
                      <FileDown className="size-4" />
                      [ EXPORT // CV ]
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Operational History & Expertise Section */}
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
                      <Badge variant="secondary" className="font-mono text-secondary-foreground font-bold tracking-widest uppercase">
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
                  <Badge variant="outline" className="font-mono text-secondary-foreground font-bold bg-surface-container-low px-3 py-1 border-border">
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
                    onClick={navigateToBlueCoast}
                    className="font-mono font-bold text-xs uppercase tracking-wider clip-chamfer gap-2 h-9 px-4 cursor-pointer shadow-md hover:shadow-primary/20"
                  >
                    [ VIEW FULL BLUE COAST ERP CASE STUDY → ]
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Classified Operations Grid (Projects Section) */}
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

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-surface-container border-border clip-chamfer shadow-xl flex flex-col justify-between group hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center bg-surface-container-low border border-border/40 px-2.5 py-1 mb-2">
                      <span className="font-mono text-xs font-bold text-primary">
                        {project.tag}
                      </span>
                    </div>

                    {project.image ? (
                      <div className="w-full aspect-video bg-surface-container-lowest border border-border/60 flex items-center justify-center relative overflow-hidden group/img">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
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
              ))}

              {filteredProjects.length === 0 && (
                <div className="col-span-full py-12 text-center font-mono text-muted-foreground">
                  // NO MISSIONS FOUND MATCHING &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;

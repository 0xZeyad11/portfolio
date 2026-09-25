import React, { useState } from 'react';
import profilePic from './assets/profile-pic.png';

const cvUrl = new URL('../assets/Zeyad_Hesham_FullStack.pdf', import.meta.url).href;

function App() {
  const [activeSection, setActiveSection] = useState<'overview' | 'experience' | 'projects'>('overview');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: 'overview' | 'experience' | 'projects') => {
    e.preventDefault();
    if (activeSection === section) return;
    setIsTransitioning(true);
    setActiveSection(section);
    
    // Jump to section with smooth scroll, giving the transition time to be seen
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Glitch duration
  };

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen pb-12">
      {/* Explicit Hacky Screen Glitch Overlay */}
      <div className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-200 flex items-center justify-center bg-surface-container-lowest/90 backdrop-blur-sm ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px]"></div>
        <span className="font-mono text-primary-fixed text-lg font-bold tracking-[0.5em] animate-pulse relative z-10 ml-[0.5em]">UPLINKING...</span>
      </div>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
        <div className="h-20 w-full px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm uppercase font-bold tracking-tight text-primary-fixed">ZEYAD HESHAM</span>
                <span className="font-label-md text-label-md px-space-sm py-0.5 bg-error-container text-on-error-container uppercase font-bold tracking-widest">FULLSTACK ENGINEER</span>
              </div>
              <span className="hidden xl:inline-block font-label-md text-label-md text-cyan-400 font-mono tracking-widest">// STATUS: OPEN-TO-WORK </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-space-sm bg-surface-container-low px-space-sm py-space-xs">
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, 'overview')}
              className={`font-label-md text-label-md uppercase px-space-md py-space-xs transition-colors ${activeSection === 'overview' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}
            >OVERVIEW</a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className={`font-label-md text-label-md uppercase px-space-md py-space-xs transition-colors ${activeSection === 'experience' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}
            >Experience Log</a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className={`font-label-md text-label-md uppercase px-space-md py-space-xs transition-colors ${activeSection === 'projects' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}
            >Projects Stack</a>
          </nav>

        </div>
        <div className="h-1 w-full bg-surface-container flex">
          <div
            className="h-full bg-primary-fixed transition-all duration-700 ease-out"
            style={{ width: activeSection === 'overview' ? '25%' : activeSection === 'experience' ? '60%' : '100%' }}
          ></div>
          <div
            className="h-full bg-secondary-container transition-all duration-700 ease-out"
            style={{ width: activeSection === 'projects' ? '0%' : '10%' }}
          ></div>
          <div className="h-full bg-surface-container-highest flex-1"></div>
        </div>
      </header>

      <main className={`w-full pt-28 px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg flex flex-col w-full overflow-hidden transition-all duration-300 ease-out ${isTransitioning ? 'opacity-30 blur-sm grayscale translate-x-4 scale-[0.98]' : 'opacity-100 blur-0 grayscale-0 translate-x-0 scale-100'}`}>

        {/* Top System Telemetry HUD Bar */}
        <section className="w-full flex flex-col gap-space-xs mb-space-lg">
          <div className="flex items-center justify-between flex-wrap gap-space-sm bg-surface-container-low px-space-md py-space-xs shadow-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest font-bold flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary-fixed inline-block animate-ping"></span>
                SYS.OP: Z.01 // OPERATIVE Overview
              </span>
              <span className="font-label-md text-label-md text-secondary-fixed font-mono font-bold uppercase tracking-wider">:: SOFTWARE ENGINEER</span>
            </div>
            <div className="hidden lg:flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant font-mono">
              <div className="flex items-center gap-2">
                <span className="text-secondary-fixed font-bold">CPU</span>
                <div className="flex gap-[2px]">
                  <div className="w-1.5 h-3 bg-secondary-fixed"></div>
                  <div className="w-1.5 h-3 bg-secondary-fixed opacity-80 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-3 bg-secondary-fixed opacity-40 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                  <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                </div>
                <span>42%</span>
              </div>
              <span className="text-surface-container-highest">/</span>
              <div className="flex items-center gap-2">
                <span className="text-primary-fixed font-bold">RAM</span>
                <div className="flex gap-[2px]">
                  <div className="w-1.5 h-3 bg-primary-fixed"></div>
                  <div className="w-1.5 h-3 bg-primary-fixed"></div>
                  <div className="w-1.5 h-3 bg-primary-fixed"></div>
                  <div className="w-1.5 h-3 bg-primary-fixed opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                </div>
                <span>12GB</span>
              </div>
              <span className="text-surface-container-highest">/</span>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">PWR</span>
                <div className="w-7 h-3 border border-cyan-400/50 p-[1px] flex gap-[1px]">
                  <div className="h-full w-full bg-cyan-400"></div>
                  <div className="h-full w-full bg-cyan-400"></div>
                  <div className="h-full w-full bg-cyan-400 opacity-80 animate-pulse"></div>
                </div>
                <span>94%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bio-Monitor Operative Dossier Section */}
        <section id="overview" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-space-md mb-space-xl items-stretch">
          <div className="lg:col-span-3 bg-surface-container p-space-md flex flex-col justify-between shadow-xl relative group">
            <div className="w-full flex justify-between items-center pb-space-sm bg-surface-container-low px-space-sm py-space-xs mb-space-sm">
              <span className="font-label-sm text-label-sm text-primary-fixed font-bold tracking-widest uppercase">BASE OF OPERATIONS</span>
              <span className="font-label-md text-label-md text-on-surface font-mono font-bold tracking-widest">EGYPT</span>
            </div>
            <div className="relative w-3/4 mx-auto overflow-hidden flex items-center justify-center mt-2 border border-surface-container-highest shadow-lg">
              <img
                src={profilePic}
                alt="Zeyad Hesham Profile"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between">
                <div className="flex justify-start">
                  <span className="bg-surface-container-lowest/60 px-1 text-[9px] text-primary-fixed font-mono tracking-widest uppercase shadow-sm">ID: ZH-99</span>
                </div>
                <div className="flex justify-end">
                  <span className="bg-surface-container-lowest/60 px-1 text-[9px] text-secondary-fixed font-mono tracking-widest flex items-center gap-1 shadow-sm">
                    UPLINK <span className="w-1.5 h-1.5 bg-secondary-fixed animate-ping rounded-full"></span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-9 bg-surface-container p-space-lg flex flex-col justify-between shadow-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low px-space-md py-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="w-3 h-3 bg-secondary-fixed inline-block"></span>
                  <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary-fixed">SPEC_SHEET // BACKEND ENGINEER</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">EMAIL:</span>
                  <span className="font-label-lg text-label-lg text-on-error-container font-mono font-bold bg-error-container px-space-md py-1 shadow-md">
                    zeyadhesham176@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight text-primary-fixed">
                  ZEYAD HESHAM
                </h1>
                <p className="font-title-md text-title-md text-secondary-fixed font-mono">
                  Full-Stack Engineer
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-xs">
                  Highly skilled Full-Stack Engineer specializing in scalable REST API design, robust backend architecture using NestJS, TypeScript, Node.js, and PostgreSQL, and modern frontend development with React, HTML, CSS, and Tailwind CSS. Proficient in developing production systems with JWT authentication, role-based access control (RBAC), real-time communication via WebSockets, and geospatial querying. Experienced in optimizing database schema design and orchestrating containerized deployments with Docker, ensuring high performance and security.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg pt-space-lg mt-6 border-t border-surface-container-high">
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md text-secondary-fixed font-mono uppercase tracking-wider pb-2 border-b border-surface-container-highest">Languages</span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-primary-container text-on-primary-container font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">TypeScript</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">JavaScript</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">C++</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">SQL</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md text-secondary-fixed font-mono uppercase tracking-wider pb-2 border-b border-surface-container-highest">Backend & APIs</span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-primary-container text-on-primary-container font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">NestJS</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">Node.js</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">Express.js</span>
                    <span className="bg-surface-container-high text-primary-fixed font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">WebSockets</span>
                    <span className="bg-surface-container-high text-primary-fixed font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">JWT / RBAC</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md text-secondary-fixed font-mono uppercase tracking-wider pb-2 border-b border-surface-container-highest">Databases & ORMs</span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-primary-container text-on-primary-container font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">PostgreSQL</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">MongoDB</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">Prisma</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">TypeORM</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md text-secondary-fixed font-mono uppercase tracking-wider pb-2 border-b border-surface-container-highest">DevOps & Frontend</span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-primary-container text-on-primary-container font-label-md text-label-md font-mono uppercase px-space-md py-1.5 font-bold shadow-md">Docker</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">Caddy</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">React</span>
                    <span className="bg-surface-container-high text-on-surface font-label-md text-label-md font-mono uppercase px-space-md py-1.5 shadow-md">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-md pt-space-lg">
              <a href="https://linkedin.com/in/zedoh" className="bg-primary-container text-on-primary-container px-space-lg py-space-sm font-label-lg text-label-lg font-bold uppercase tracking-wider shadow-lg hover:bg-secondary-container hover:text-on-secondary-fixed transition-all flex items-center gap-space-sm">
                [ JACK IN // LINKEDIN ]
              </a>
              <a href="https://github.com/0xZeyad11" className="bg-surface-container-low text-secondary-fixed px-space-md py-space-sm font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all flex items-center gap-space-sm">
                [ FETCH // GITHUB ]
              </a>
              <a href="mailto:zeyadhesham176@gmail.com" className="bg-surface-container-low text-error px-space-md py-space-sm font-label-lg text-label-lg uppercase tracking-wider hover:bg-error hover:text-on-error transition-all flex items-center gap-space-sm">
                [ PING // EMAIL ]
              </a>
              <a href={cvUrl} download="Zeyad_Hesham_CV.pdf" className="bg-surface-container-low text-primary-fixed px-space-md py-space-sm font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-fixed hover:text-on-primary-fixed transition-all flex items-center gap-space-sm">
                [ EXPORT // CV ]
              </a>
            </div>
          </div>
        </section>

        {/* Experience Matrix */}
        <section id="experience" className="scroll-mt-28 w-full mb-space-xl">
          <div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs mb-space-md">
            <span className="font-label-md text-label-md uppercase font-bold text-primary-fixed tracking-wider">
              // OPERATIONAL HISTORY & EXPERTISE
            </span>
          </div>
          <div className="bg-surface-container p-space-lg shadow-xl relative group border-l-4 border-primary-fixed">
            <div className="flex justify-between items-start mb-space-sm">
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-secondary-fixed font-mono font-bold tracking-widest uppercase mb-1">CORP: BLUE COAST ERP</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase">BACKEND ENGINEER (FREELANCE)</span>
              </div>
              <span className="font-label-md text-label-md text-secondary-fixed font-bold font-mono bg-surface-container-low px-2 py-1">JAN 2026 - PRESENT</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md mt-2">
              Designed and built the backend for a production desktop ERP system used by an aluminum and glass fabrication company. The system manages the full lifecycle of construction projects. Built with NestJS, TypeScript, PostgreSQL, and Docker.
            </p>
            <ul className="text-on-surface-variant font-body-sm space-y-2 list-disc pl-4 marker:text-secondary-fixed">
              <li>Architected a modular NestJS backend with 15+ domain modules including compounds, buildings, floors, apartments, windows, cut plans, glass batches, accessories, pricing, invoices, reports, weights, PDFs, images, and system configuration.</li>
              <li>Engineered a builder-pattern window calculation engine supporting 4 aluminum profile systems (PS 9600, PS 6600, PS 4800, Sonata 45) with configurable sub-types and options.</li>
              <li>Developed a Best Decreasing Fit bin-packing algorithm for generating optimized aluminum cut plans that minimize material waste, factoring in blade kerf and 45-degree cutting angle adjustments.</li>
              <li>Built a pricing engine that computes per-square-meter window pricing by aggregating aluminum weight, glass area, and accessories costs with configurable waste percentages, plus fabrication, installation, transportation, and profit margin calculations.</li>
              <li>Designed an invoicing module with automatic total calculation from window specifications via integration with the pricing engine, supporting invoice lifecycle management.</li>
              <li>Created a 3-tier reporting system (system-wide, compound-level, building-level) with aggregated analytics for material consumption, profile usage efficiency, accessory usage, unit counts, and financial summaries.</li>
              <li>Generated Arabic RTL PDF reports using pdfmake with Cairo font support, exporting window measurement tables grouped by profile system.</li>
              <li>Implemented JWT-based authentication with access and refresh token rotation, bcrypt password hashing, and role-based authorization (RBAC) enforced globally via NestJS guards.</li>
              <li>Managed database schema evolution with TypeORM migrations and seeded reference data for accessories and profile weights via dedicated seed scripts.</li>
              <li>Containerized the full production stack (NestJS backend, PostgreSQL database, Caddy reverse proxy) using Docker Compose for both development and production environments.</li>
            </ul>
          </div>
        </section>

        {/* Classified Operations Grid */}
        <section id="projects" className="scroll-mt-28 w-full mb-space-xl">
          <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-sm mb-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-lg text-label-lg uppercase font-bold text-on-surface tracking-wider">
                [ API PROJECTS ]
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">

            {/* Kitchenly */}
            <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-xl relative">
              <div className="flex flex-col gap-space-sm">
                <div className="flex justify-between items-center bg-surface-container-low px-space-sm py-space-xs font-label-sm text-label-sm font-mono mb-2">
                  <span className="text-primary-fixed font-bold">PRJ_01 // KITCHENLY</span>
                </div>
                <div className="w-full aspect-video bg-surface-container-lowest border border-surface-container-highest flex items-center justify-center relative overflow-hidden group/img">
                  <span className="font-mono text-on-surface-variant text-sm">[ IMAGE FEED ]</span>
                  <div className="absolute inset-0 bg-primary-fixed/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase tracking-tight">
                    PROJECT // KITCHENLY
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4">
                    Modular REST API with 28+ endpoints for users, menus, orders, and payments. Implemented JWT authentication and RBAC. Integrated Stripe payment processing. Built real-time order tracking using WebSockets (Socket.io). Developed geospatial search using PostGIS. Designed normalized PostgreSQL schema with Prisma ORM. Generated OpenAPI (Swagger) specs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">PostgreSQL</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">Prisma</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">PostGIS</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">WebSockets</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">Stripe</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-lowest p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-primary-fixed font-bold font-mono">STATUS: SOURCE_AVAILABLE</span>
                <a href="https://github.com/0xZeyad11/Kitchenly" target="_blank" rel="noreferrer" className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-sm py-1 font-bold uppercase hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors block text-center">
                  VIEW GITHUB
                </a>
              </div>
            </div>

            {/* Restaurant API */}
            <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-xl relative">
              <div className="flex flex-col gap-space-sm">
                <div className="flex justify-between items-center bg-surface-container-low px-space-sm py-space-xs font-label-sm text-label-sm font-mono mb-2">
                  <span className="text-secondary-fixed font-bold">PRJ_02 // FOOD PLATFORM</span>
                </div>
                <div className="w-full aspect-video bg-surface-container-lowest border border-surface-container-highest flex items-center justify-center relative overflow-hidden group/img">
                  <span className="font-mono text-on-surface-variant text-sm">[ IMAGE FEED ]</span>
                  <div className="absolute inset-0 bg-secondary-fixed/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase tracking-tight">
                    RESTAURANT API
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4">
                    Built a RESTful API for a food delivery platform using Node.js, Express, and MongoDB. Implemented JWT authentication and role-based authorization (RBAC) across client, admin, vendor, and driver roles. Modeled scalable NoSQL schemas using Mongoose.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">Node.js</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">Express</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">MongoDB</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-lowest p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary-fixed font-bold font-mono">STATUS: ACTIVE</span>
                <a href="https://github.com/0xZeyad11/Restaurant---Backend-API" target="_blank" rel="noreferrer" className="font-label-sm text-label-sm bg-surface-container-high text-on-surface px-space-sm py-1 uppercase font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors block text-center">
                  VIEW GITHUB
                </a>
              </div>
            </div>

            {/* Termadoro */}
            <div className="bg-surface-container p-space-md flex flex-col justify-between shadow-xl relative">
              <div className="flex flex-col gap-space-sm">
                <div className="flex justify-between items-center bg-surface-container-low px-space-sm py-space-xs font-label-sm text-label-sm font-mono mb-2">
                  <span className="text-error font-bold">PRJ_03 // CLI TOOL</span>
                </div>
                <div className="w-full aspect-video bg-surface-container-lowest border border-surface-container-highest flex items-center justify-center relative overflow-hidden group/img">
                  <span className="font-mono text-on-surface-variant text-sm">[ IMAGE FEED ]</span>
                  <div className="absolute inset-0 bg-error/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col gap-1 mt-4">
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase tracking-tight">
                    TERMADORO
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4">
                    Developed and published a cross-platform CLI productivity tool on npm for Pomodoro-based time tracking with tagging and session analytics. Designed interactive terminal workflows with real-time controls and desktop notifications.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">NPM</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">CLI</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 font-mono">Terminal</span>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-lowest p-space-sm flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-error font-bold font-mono">PUBLISHED</span>
                <a href="https://www.npmjs.com/package/termadoro" target="_blank" rel="noreferrer" className="font-label-sm text-label-sm bg-error-container text-on-error-container px-space-sm py-1 uppercase font-bold hover:bg-error hover:text-on-error transition-colors block text-center">
                  NPMJS.COM
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default App;

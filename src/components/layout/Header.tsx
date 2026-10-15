import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Mail, Languages } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { PROFILE_INFO } from "@/constants/profile";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/types/portfolio";
import { useEmailModal } from "@/context/EmailModalContext";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const currentNav = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];
  const [timeStr, setTimeStr] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { openEmailModal } = useEmailModal();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      setTimeStr(
        `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} ${pad(
          now.getHours()
        )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on resize to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileNav = (section: SectionId) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-border shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
      <div className="h-16 sm:h-20 w-full px-4 sm:px-6 md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-3 sm:gap-space-md">
        {/* Left: Operative Identity */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-base sm:text-headline-sm uppercase font-bold tracking-tight text-primary">
                {t("overview.name", PROFILE_INFO.name)}
              </span>
              <Badge
                variant="destructive"
                className="font-space font-bold tracking-wider text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-0.5 sm:py-1 h-auto uppercase"
              >
                {t("overview.role", "SOFTWARE-ENGINEER").toUpperCase()}
              </Badge>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-secondary-foreground tracking-widest mt-0.5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-ping"></span>
                {t("status.openToWork", `STATUS: ${PROFILE_INFO.status}`)}
              </span>
              <span className="hidden xl:inline text-border">/</span>
              <span className="hidden xl:inline text-muted-foreground">{t("status.operative", `OP: ${PROFILE_INFO.operativeId}`)}</span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center justify-center">
          <Tabs
            value={activeSection}
            onValueChange={(val) => onNavigate(val as SectionId)}
            className="w-auto"
          >
            <TabsList className="bg-surface-container-low border border-border p-1 gap-1">
              {NAV_ITEMS.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="font-space text-xs uppercase px-3.5 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold transition-all cursor-pointer"
                >
                  {t(`nav.${item.id}`, item.label)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </nav>

        {/* Right: Language Switcher & System Telemetry */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cyberpunk Language Switcher Button (Desktop & Mobile) */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="group font-space font-bold text-xs uppercase tracking-wider clip-chamfer h-8 px-2.5 sm:px-3 gap-1.5 border-primary/50 text-foreground hover:text-primary hover:border-primary cursor-pointer shadow-sm hover:shadow-[0_0_10px_rgba(252,238,10,0.25)] transition-all bg-surface-container-low"
            title={language === "en" ? "تبديل إلى اللغة العربية" : "Switch to English"}
          >
            <Languages className="size-3.5 text-secondary-foreground group-hover:rotate-12 transition-transform" />
            <span className="text-primary font-bold">{t("nav.switchLang", language === "en" ? "عربي" : "EN")}</span>
          </Button>

          {/* Cyberpunk System Telemetry & Live Clock (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 bg-surface-container-low/80 border border-border px-3 py-1.5 shadow-sm">
            {/* Resource Metrics */}
            <div className="flex items-center gap-3 font-mono text-xs">
              {/* CPU */}
              <div className="flex items-center gap-1.5">
                <span className="text-secondary-foreground font-bold text-[10px] tracking-wider">{t("telemetry.cpu", "CPU")}</span>
                <div className="flex gap-[2px] items-end h-3">
                  <div className="w-1.5 h-2 bg-secondary-foreground"></div>
                  <div className="w-1.5 h-3 bg-secondary-foreground opacity-90 animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-secondary-foreground opacity-40"></div>
                  <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                </div>
                <span className="text-[10px] text-muted-foreground">42%</span>
              </div>

              <span className="text-surface-container-highest text-xs">/</span>

              {/* RAM */}
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold text-[10px] tracking-wider">{t("telemetry.ram", "RAM")}</span>
                <div className="flex gap-[2px] items-end h-3">
                  <div className="w-1.5 h-3 bg-primary"></div>
                  <div className="w-1.5 h-3 bg-primary"></div>
                  <div className="w-1.5 h-2.5 bg-primary opacity-70 animate-pulse"></div>
                  <div className="w-1.5 h-3 bg-surface-container-highest"></div>
                </div>
                <span className="text-[10px] text-muted-foreground">12GB</span>
              </div>

              <span className="hidden xl:inline text-surface-container-highest text-xs">/</span>

              {/* Latency */}
              <div className="hidden xl:flex items-center gap-1.5">
                <span className="text-secondary-foreground font-bold text-[10px]">{t("telemetry.lat", "LAT")}:</span>
                <span className="text-[10px] text-primary">2ms</span>
              </div>
            </div>

            {/* Equalizer Frequency Signal Bars */}
            <div className="hidden 2xl:flex items-end gap-0.5 h-3.5 px-1.5 py-0.5 bg-surface-container border border-border/50">
              <div className="w-1 h-2 bg-secondary-foreground animate-pulse"></div>
              <div className="w-1 h-3.5 bg-primary animate-pulse [animation-delay:150ms]"></div>
              <div className="w-1 h-1.5 bg-secondary-foreground animate-pulse [animation-delay:300ms]"></div>
              <div className="w-1 h-3 bg-primary animate-pulse [animation-delay:450ms]"></div>
              <div className="w-1 h-2.5 bg-secondary-foreground animate-pulse [animation-delay:200ms]"></div>
            </div>

            {/* Live System Clock */}
            <div className="flex items-center gap-1.5 pl-2.5 border-l border-border font-mono text-[11px]">
              <span className="text-muted-foreground text-[10px] uppercase tracking-wider">{t("telemetry.sysClk", "SYS_CLK")}:</span>
              <span className="text-secondary-foreground font-bold tracking-wider">{timeStr}</span>
            </div>
          </div>

          {/* Mobile: Cyber Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center size-9 border border-border bg-surface-container-low text-primary hover:border-primary active:bg-surface-container transition-colors cursor-pointer clip-chamfer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="size-5 text-primary" /> : <Menu className="size-5 text-primary" />}
          </button>
        </div>
      </div>

      {/* Dynamic HUD Progress Bar */}
      <div className="h-1 w-full bg-surface-container flex">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: currentNav.progressPercent }}
        ></div>
        <div
          className="h-full bg-secondary-foreground transition-all duration-700 ease-out"
          style={{ width: activeSection === "projects" ? "0%" : "10%" }}
        ></div>
        <div className="h-full bg-surface-container-highest flex-1"></div>
      </div>

      {/* Mobile Drawer Navigation & Telemetry Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface-container-lowest/98 backdrop-blur-xl px-4 py-4 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Navigation Section Buttons */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              // SELECT SECTOR DESTINATION
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMobileNav(item.id)}
                  className={cn(
                    "w-full text-left font-space text-xs uppercase px-3.5 py-2.5 font-bold transition-all flex items-center justify-between cursor-pointer border clip-chamfer",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_rgba(252,238,10,0.35)]"
                      : "bg-surface-container-low text-foreground border-border/80 hover:border-primary/60 hover:text-primary"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        "size-1.5 rounded-full inline-block",
                        isActive ? "bg-primary-foreground animate-ping" : "bg-muted-foreground"
                      )}
                    />
                    {t(`nav.${item.id}`, item.label)}
                  </span>
                  <span className="font-mono text-[10px] opacity-75">{item.progressPercent}</span>
                </button>
              );
            })}
          </div>

          {/* Direct Quick Action Links */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60">
            <Button
              variant="outline"
              asChild
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#/cv" onClick={() => setIsMobileMenuOpen(false)}>
                <FileText className="size-3.5" />
                <span>{t("nav.viewCv", "[ VIEW CV ]")}</span>
              </a>
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEmailModal();
              }}
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 cursor-pointer"
            >
              <Mail className="size-3.5" />
              <span>{t("nav.email", "[ EMAIL ]")}</span>
            </Button>
          </div>

          {/* Mobile Telemetry HUD Strip */}
          <div className="pt-2 border-t border-border/60 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="text-secondary-foreground font-bold">{t("telemetry.sysClk", "SYS_CLK")}:</span>
              <span className="text-foreground">{timeStr.split(" ")[1] || timeStr}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-secondary-foreground font-bold">CPU: 42%</span>
              <span className="text-primary font-bold">RAM: 12GB</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

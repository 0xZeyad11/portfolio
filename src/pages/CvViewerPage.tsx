import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  FileDown,
  ExternalLink,
  Mail,
  ShieldCheck,
  FileText,
  Printer,
  Languages,
} from "lucide-react";
import { PROFILE_INFO, cvUrl } from "@/constants/profile";
import { useEmailModal } from "@/context/EmailModalContext";
import { useLanguage } from "@/context/LanguageContext";

interface CvViewerPageProps {
  onBack: () => void;
}

export const CvViewerPage: React.FC<CvViewerPageProps> = ({ onBack }) => {
  const { openEmailModal } = useEmailModal();
  const { t, language, toggleLanguage } = useLanguage();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePrint = () => {
    const iframe = document.getElementById("pdf-frame") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.print();
    } else {
      window.open(cvUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface font-body-md pb-16 antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="group font-space text-xs uppercase font-bold tracking-wider border-border hover:border-primary text-foreground hover:text-primary clip-chamfer gap-2 h-9 px-3 sm:px-3.5 cursor-pointer shrink-0"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform duration-200" />
            <span className="hidden sm:inline">{t("cvViewer.back", "[ RETURN TO PORTFOLIO ]")}</span>
            <span className="sm:hidden">{t("cvViewer.back", "[ RETURN ]")}</span>
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {t("cvViewer.badge", "OPERATIVE DOSSIER // RESUME VIEWER")}
            </span>
            <Badge variant="outline" className="font-space font-bold text-[10px] uppercase border-primary/50 text-primary gap-1">
              <ShieldCheck className="size-3" />
              {t("cvViewer.ready", "AUTHENTICATED")}
            </Badge>
          </div>

          <div className="flex items-center gap-2 shrink-0">
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
              variant="outline"
              asChild
              className="hidden sm:inline-flex font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 border-border hover:border-secondary text-foreground hover:text-secondary cursor-pointer"
            >
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5 rtl:rotate-180" />
                <span>{t("cvViewer.openRaw", "NEW TAB")}</span>
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={handlePrint}
              className="hidden lg:inline-flex font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-3.5 gap-2 border-border hover:border-primary text-foreground hover:text-primary cursor-pointer"
            >
              <Printer className="size-3.5" />
              <span>{t("cvViewer.print", "PRINT")}</span>
            </Button>

            <Button
              variant="default"
              asChild
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-9 px-2.5 sm:px-4 gap-1.5 sm:gap-2 cursor-pointer shadow-md hover:shadow-primary/20 shrink-0"
            >
              <a href={cvUrl} download={PROFILE_INFO.cvFileName}>
                <FileDown className="size-4" />
                <span className="hidden sm:inline">{t("cvViewer.downloadFile", "[ DOWNLOAD PDF ]")}</span>
                <span className="sm:hidden">[ PDF ]</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Terminal Metadata Bar */}
        <div className="border border-border bg-card/60 backdrop-blur-sm p-4 clip-chamfer flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 bg-primary/10 border border-primary/40 flex items-center justify-center text-primary clip-chamfer">
              <FileText className="size-4.5" />
            </div>
            <div>
              <div className="font-mono text-xs text-primary font-bold tracking-wider flex items-center gap-2">
                <span>{PROFILE_INFO.cvFileName}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground font-normal">PDF DOCUMENT</span>
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">
                SUBJECT: {t("overview.name", PROFILE_INFO.name)} // {t("overview.role", PROFILE_INFO.role).toUpperCase()}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              onClick={() => openEmailModal("CV Review & Opportunity // Zeyad Hesham")}
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-8 px-3 gap-1.5 cursor-pointer"
            >
              <Mail className="size-3.5" />
              <span>{t("cvViewer.contactZeyad", "CONTACT ZEYAD")}</span>
            </Button>

            <Button
              variant="default"
              asChild
              className="font-space text-xs uppercase font-bold tracking-wider clip-chamfer h-8 px-3.5 gap-1.5 cursor-pointer"
            >
              <a href={cvUrl} download={PROFILE_INFO.cvFileName}>
                <FileDown className="size-3.5" />
                <span>{t("cvViewer.downloadFile", "DOWNLOAD FILE")}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <Card className="border-border bg-card shadow-2xl overflow-hidden clip-chamfer">
          <div className="bg-surface-container-highest/80 border-b border-border px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span>{t("cvViewer.liveDossier", "STREAM: EMBEDDED_DOCUMENT_VIEWPORT")}</span>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground uppercase">
              {t("cvViewer.status", "STATUS: LIVE_PREVIEW")}
            </div>
          </div>
          <CardContent className="p-0">
            <iframe
              id="pdf-frame"
              src={`${cvUrl}#toolbar=1&navpanes=0`}
              title={`${PROFILE_INFO.name} CV Document`}
              className="w-full h-[78vh] min-h-[650px] border-none bg-surface-container-lowest"
            />
          </CardContent>
        </Card>

        {/* Mobile / Fallback Notice */}
        <div className="p-4 border border-dashed border-border/80 bg-surface-container/30 clip-chamfer flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-secondary font-bold">INFO //</span>{" "}
            {t("cvViewer.fallbackNotice", "If your browser restricts inline PDF rendering on mobile devices, use the buttons above to view in a new tab or download directly.")}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              asChild
              className="font-space text-xs uppercase font-bold clip-chamfer h-8 px-3 gap-1.5 cursor-pointer"
            >
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3 rtl:rotate-180" />
                {t("cvViewer.openNewTab", "OPEN IN NEW TAB")}
              </a>
            </Button>
            <Button
              variant="default"
              asChild
              className="font-space text-xs uppercase font-bold clip-chamfer h-8 px-3 gap-1.5 cursor-pointer"
            >
              <a href={cvUrl} download={PROFILE_INFO.cvFileName}>
                <FileDown className="size-3" />
                {t("cvViewer.downloadFile", "DOWNLOAD")}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

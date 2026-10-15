import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFILE_INFO } from "@/constants/profile";
import { useClipboard } from "@/hooks/useClipboard";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Laptop,
  CheckCircle2,
  Copy,
  ExternalLink,
  Send,
} from "lucide-react";

interface EmailChooserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSubject?: string;
}

export const EmailChooserDialog: React.FC<EmailChooserDialogProps> = ({
  open,
  onOpenChange,
  defaultSubject = "Inquiry via Portfolio // Zeyad Hesham",
}) => {
  const { t } = useLanguage();
  const { hasCopied, copy } = useClipboard();
  const email = PROFILE_INFO.email;

  const encodedSubject = encodeURIComponent(defaultSubject);
  const encodedEmail = encodeURIComponent(email);

  const emailClients = [
    {
      id: "desktop",
      title: t("emailModal.desktopTitle", "Default Mail App"),
      subtitle: t("emailModal.desktopSub", "System mail app (Windows Mail, Outlook, Apple Mail)"),
      badge: t("emailModal.desktopBadge", "SYSTEM"),
      badgeVariant: "default" as const,
      icon: <Laptop className="size-4 sm:size-4.5 text-primary shrink-0" />,
      href: `mailto:${email}?subject=${encodedSubject}`,
      target: "_self",
    },
    {
      id: "gmail",
      title: t("emailModal.gmailTitle", "Google Gmail"),
      subtitle: t("emailModal.gmailSub", "Compose directly in web browser"),
      badge: t("emailModal.gmailBadge", "GMAIL"),
      badgeVariant: "destructive" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 sm:size-4.5 text-[#EA4335] shrink-0 fill-current">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "outlook-personal",
      title: t("emailModal.outlookPersonalTitle", "Outlook / Hotmail"),
      subtitle: t("emailModal.outlookPersonalSub", "Microsoft Outlook Live webmail"),
      badge: t("emailModal.outlookPersonalBadge", "OUTLOOK"),
      badgeVariant: "secondary" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 sm:size-4.5 text-[#0078D4] shrink-0 fill-current">
          <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
        </svg>
      ),
      href: `https://outlook.live.com/mail/deeplink/compose?to=${encodedEmail}&subject=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "outlook-office",
      title: t("emailModal.outlookOfficeTitle", "Microsoft 365 (Work/School)"),
      subtitle: t("emailModal.outlookOfficeSub", "Office 365 enterprise webmail"),
      badge: t("emailModal.outlookOfficeBadge", "M365"),
      badgeVariant: "outline" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 sm:size-4.5 text-[#00A4EF] shrink-0 fill-current">
          <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
        </svg>
      ),
      href: `https://outlook.office.com/mail/deeplink/compose?to=${encodedEmail}&subject=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "yahoo",
      title: t("emailModal.yahooTitle", "Yahoo Mail"),
      subtitle: t("emailModal.yahooSub", "Compose directly in Yahoo webmail"),
      badge: t("emailModal.yahooBadge", "YAHOO"),
      badgeVariant: "outline" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 sm:size-4.5 text-[#6001D2] shrink-0 fill-current">
          <path d="M12.923 11.233L17.5 2h-3.418L11.2 8.423 8.318 2H4.9L9.5 11.233V22h3.423v-10.767z" />
        </svg>
      ),
      href: `https://compose.mail.yahoo.com/?to=${encodedEmail}&subject=${encodedSubject}&subj=${encodedSubject}`,
      target: "_blank",
    },
  ];

  const handleLinkClick = (target: string) => {
    // For native mailto, close modal after brief delay so protocol registers
    if (target === "_self") {
      setTimeout(() => onOpenChange(false), 350);
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="w-[92vw] max-w-[380px] sm:w-[86vw] sm:max-w-lg max-h-[85vh] p-2.5 sm:p-5 bg-surface-container/98 border border-primary/40 clip-chamfer shadow-[0_0_30px_rgba(252,238,10,0.12)] flex flex-col gap-2 sm:gap-3 text-foreground overflow-hidden"
      >
        {/* Tactical Compact Header */}
        <DialogHeader className="space-y-0.5 sm:space-y-1 border-b border-border/80 pb-1.5 sm:pb-2.5 pr-8 rtl:pr-0 rtl:pl-8 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Badge
              variant="default"
              className="font-space text-[8px] sm:text-[10px] font-bold uppercase py-0.5 px-1.5 sm:px-2 bg-primary text-primary-foreground shadow-sm"
            >
              <Send className="size-2 sm:size-3 me-1 inline" />
              {t("emailModal.badge", "COMMS // DIRECT DISPATCH")}
            </Badge>
            <span className="font-mono text-[9px] text-muted-foreground uppercase hidden sm:inline">
              PORT: 587
            </span>
          </div>

          <DialogTitle className="font-headline-lg text-xs sm:text-base md:text-lg font-bold uppercase tracking-tight text-primary drop-shadow-[0_0_8px_rgba(252,238,10,0.2)]">
            {t("emailModal.title", "CHOOSE EMAIL CLIENT")}
          </DialogTitle>

          <DialogDescription className="font-mono text-[9px] sm:text-[11px] text-muted-foreground line-clamp-1">
            {t("emailModal.description", "Select your preferred desktop or web client to message")}{" "}
            <span className="text-secondary-foreground font-bold">{t("overview.name", PROFILE_INFO.name)}</span>.
          </DialogDescription>
        </DialogHeader>

        {/* Target Email Quick Copy Box */}
        <div className="py-1.5 px-2 sm:p-2.5 bg-surface-container-lowest border border-border clip-chamfer flex items-center justify-between gap-1.5 sm:gap-2 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <Mail className="size-3 sm:size-3.5 text-primary shrink-0" />
            <span className="font-mono text-[11px] sm:text-sm font-bold text-foreground truncate selection:bg-primary selection:text-primary-foreground dir-ltr">
              {email}
            </span>
          </div>

          <Button
            variant={hasCopied ? "default" : "outline"}
            size="sm"
            onClick={() => copy(email)}
            className={`font-mono text-[9px] sm:text-xs uppercase font-bold tracking-wider h-6 sm:h-7.5 px-1.5 sm:px-2.5 gap-1 shrink-0 transition-all cursor-pointer ${
              hasCopied
                ? "bg-secondary-foreground text-background border-secondary-foreground shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                : "border-border hover:border-primary text-foreground hover:text-primary"
            }`}
          >
            {hasCopied ? (
              <>
                <CheckCircle2 className="size-2.5 sm:size-3" />
                <span>{t("emailModal.copied", "COPIED!")}</span>
              </>
            ) : (
              <>
                <Copy className="size-2.5 sm:size-3" />
                <span>{t("emailModal.copyButton", "COPY")}</span>
              </>
            )}
          </Button>
        </div>

        {/* Client Selection Options (Scrollable area) */}
        <div className="space-y-1 sm:space-y-1.5 flex-1 overflow-hidden flex flex-col min-h-0">
          <span className="font-mono text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-widest block px-0.5 shrink-0">
            {t("emailModal.availableClients", "SELECT PLATFORM:")}
          </span>

          <div className="overflow-y-auto space-y-1 sm:space-y-1.5 pr-0.5 sm:pr-1 max-h-[38vh] sm:max-h-[44vh]">
            {emailClients.map((client) => (
              <a
                key={client.id}
                href={client.href}
                target={client.target}
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(client.target)}
                className="group relative flex items-center justify-between p-1.5 sm:p-2.5 bg-surface-container-low/70 hover:bg-surface-container-lowest border border-border hover:border-primary/80 clip-chamfer transition-all duration-200 text-start cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(252,238,10,0.12)] no-underline"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1">
                  <div className="size-6 sm:size-8 bg-surface-container border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors shrink-0">
                    {client.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="font-space text-[11px] sm:text-xs font-bold uppercase text-foreground group-hover:text-primary transition-colors truncate">
                        {client.title}
                      </span>
                      <Badge
                        variant={client.badgeVariant}
                        className="font-space text-[7px] sm:text-[9px] font-bold py-0 px-1 uppercase shrink-0"
                      >
                        {client.badge}
                      </Badge>
                    </div>
                    <p className="hidden sm:block font-mono text-[10px] text-muted-foreground group-hover:text-foreground/80 transition-colors truncate mt-0.5">
                      {client.subtitle}
                    </p>
                  </div>
                </div>

                <ExternalLink className="size-3 sm:size-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all shrink-0 ms-1" />
              </a>
            ))}
          </div>
        </div>

        {/* Tactical Footer Readout */}
        <div className="pt-1.5 border-t border-border/60 flex items-center justify-between text-muted-foreground font-mono text-[9px] shrink-0">
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-secondary-foreground animate-ping" />
            {t("emailModal.status", "CHANNEL READY")}
          </span>
          <span className="hidden sm:inline">
            {t("emailModal.escHint", "[ ESC TO CANCEL ]")}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

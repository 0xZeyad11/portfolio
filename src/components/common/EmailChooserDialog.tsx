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
  const { hasCopied, copy } = useClipboard();
  const email = PROFILE_INFO.email;

  const encodedSubject = encodeURIComponent(defaultSubject);
  const encodedEmail = encodeURIComponent(email);

  const emailClients = [
    {
      id: "desktop",
      title: "Default Desktop Client",
      subtitle: "Opens installed PC mail app (Windows Mail, Outlook, Thunderbird, etc.)",
      badge: "SYSTEM // mailto",
      badgeVariant: "default" as const,
      icon: <Laptop className="size-5 text-primary shrink-0" />,
      href: `mailto:${email}?subject=${encodedSubject}`,
      target: "_self",
    },
    {
      id: "gmail",
      title: "Google Gmail",
      subtitle: "Compose directly in Gmail in your web browser",
      badge: "WEB CLIENT",
      badgeVariant: "destructive" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-[#EA4335] shrink-0 fill-current">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "outlook-personal",
      title: "Outlook / Hotmail (Personal)",
      subtitle: "Compose in Microsoft Outlook Live webmail",
      badge: "PERSONAL",
      badgeVariant: "secondary" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-[#0078D4] shrink-0 fill-current">
          <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
        </svg>
      ),
      href: `https://outlook.live.com/mail/deeplink/compose?to=${encodedEmail}&subject=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "outlook-office",
      title: "Microsoft 365 / Office (Work/School)",
      subtitle: "Compose in Office 365 organization webmail",
      badge: "OFFICE 365",
      badgeVariant: "outline" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-[#00A4EF] shrink-0 fill-current">
          <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
        </svg>
      ),
      href: `https://outlook.office.com/mail/deeplink/compose?to=${encodedEmail}&subject=${encodedSubject}`,
      target: "_blank",
    },
    {
      id: "yahoo",
      title: "Yahoo Mail",
      subtitle: "Compose directly in Yahoo Mail in your web browser",
      badge: "WEB CLIENT",
      badgeVariant: "outline" as const,
      icon: (
        <svg viewBox="0 0 24 24" className="size-5 text-[#6001D2] shrink-0 fill-current">
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
      setTimeout(() => onOpenChange(false), 400);
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="sm:max-w-xl w-[94vw] p-4 sm:p-6 bg-surface-container/98 border-2 border-primary/40 clip-chamfer shadow-[0_0_40px_rgba(252,238,10,0.15)] flex flex-col gap-4 text-foreground"
      >
        {/* Tactical Header */}
        <DialogHeader className="space-y-1.5 border-b border-border/80 pb-3">
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="font-space text-[10px] font-bold uppercase py-0.5 px-2 bg-primary text-primary-foreground shadow-sm"
            >
              <Send className="size-3 mr-1 inline" />
              COMMS_CHANNEL // DIRECT DISPATCH
            </Badge>
            <span className="font-mono text-[10px] text-muted-foreground uppercase hidden sm:inline">
              ENCRYPTED_PORT: 587
            </span>
          </div>

          <DialogTitle className="font-headline-lg text-lg sm:text-xl font-bold uppercase tracking-tight text-primary drop-shadow-[0_0_8px_rgba(252,238,10,0.25)] flex items-center gap-2">
            CHOOSE EMAIL CLIENT
          </DialogTitle>

          <DialogDescription className="font-mono text-xs text-muted-foreground">
            Select your preferred desktop or web client on this PC to message{" "}
            <span className="text-secondary-foreground font-bold">{PROFILE_INFO.name}</span>.
          </DialogDescription>
        </DialogHeader>

        {/* Target Email Quick Copy Box */}
        <div className="p-3 bg-surface-container-lowest border border-border clip-chamfer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="space-y-0.5 min-w-0">
            <span className="font-mono text-[10px] text-muted-foreground uppercase flex items-center gap-1.5">
              <Mail className="size-3 text-primary" /> TARGET RECIPIENT
            </span>
            <p className="font-mono text-xs sm:text-sm font-bold text-foreground truncate selection:bg-primary selection:text-primary-foreground">
              {email}
            </p>
          </div>

          <Button
            variant={hasCopied ? "default" : "outline"}
            size="sm"
            onClick={() => copy(email)}
            className={`font-mono text-xs uppercase font-bold tracking-wider h-8 px-3 gap-1.5 shrink-0 transition-all cursor-pointer ${
              hasCopied
                ? "bg-secondary-foreground text-background border-secondary-foreground shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                : "border-border hover:border-primary text-foreground hover:text-primary"
            }`}
          >
            {hasCopied ? (
              <>
                <CheckCircle2 className="size-3.5" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>COPY ADDRESS</span>
              </>
            )}
          </Button>
        </div>

        {/* Client Selection Options */}
        <div className="space-y-2 pt-1">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block px-1">
            AVAILABLE CLIENTS & PLATFORMS:
          </span>

          <div className="grid grid-cols-1 gap-2">
            {emailClients.map((client) => (
              <a
                key={client.id}
                href={client.href}
                target={client.target}
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(client.target)}
                className="group relative flex items-center justify-between p-3 sm:p-3.5 bg-surface-container-low/70 hover:bg-surface-container-lowest border border-border hover:border-primary/80 clip-chamfer transition-all duration-200 text-left cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(252,238,10,0.12)] no-underline"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-surface-container border border-border group-hover:border-primary/50 transition-colors shrink-0">
                    {client.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-space text-xs sm:text-sm font-bold uppercase text-foreground group-hover:text-primary transition-colors truncate">
                        {client.title}
                      </span>
                      <Badge
                        variant={client.badgeVariant}
                        className="font-space text-[9px] font-bold py-0 px-1.5 uppercase"
                      >
                        {client.badge}
                      </Badge>
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground/80 transition-colors truncate mt-0.5">
                      {client.subtitle}
                    </p>
                  </div>
                </div>

                <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Tactical Footer Readout */}
        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-muted-foreground font-mono text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-secondary-foreground animate-ping" />
            DISPATCH PROTOCOL ACTIVE
          </span>
          <span className="hidden sm:inline">
            [ ESC OR CLICK OUTSIDE TO CANCEL ]
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

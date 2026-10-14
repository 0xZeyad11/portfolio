import React from "react";
import profilePic from "@/assets/profile-pic.png";
import { SkillsMatrix } from "./SkillsMatrix";
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
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle2, Copy, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { PROFILE_INFO, cvUrl } from "@/constants/profile";
import { useClipboard } from "@/hooks/useClipboard";

export const OverviewSection: React.FC = () => {
  const { hasCopied, copy } = useClipboard();

  return (
    <section id="overview" className="scroll-mt-28 w-full mb-space-xl">
      <Card className="bg-surface-container border-border clip-chamfer shadow-xl flex flex-col justify-between">
        <div>
          {/* Top metadata strip */}
          <CardHeader className="bg-surface-container-low/70 border-b border-border p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary-foreground inline-block"></span>
                <span className="font-label-md font-bold uppercase tracking-wider text-secondary-foreground">
                  SPEC_SHEET // {PROFILE_INFO.systemRole}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-muted-foreground font-mono">CONTACT:</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => copy(PROFILE_INFO.email)}
                      className="font-mono font-bold text-xs h-7 px-3 gap-1.5 cursor-pointer"
                    >
                      {hasCopied ? (
                        <CheckCircle2 className="size-3.5" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                      {PROFILE_INFO.email}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{hasCopied ? "Copied to clipboard!" : "Click to copy email address"}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardHeader>

          {/* Unified Profile Body: Large Photo on Left, Full Details & Bio on Right */}
          <CardContent className="p-5 sm:p-6 lg:p-7 space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
              {/* Prominent Profile Picture Frame */}
              <div className="relative group shrink-0">
                <div className="w-full max-w-[300px] sm:w-80 md:w-96 lg:w-[380px] xl:w-[440px] aspect-[4/5] rounded-none border-2 border-primary/50 bg-surface-container-lowest overflow-hidden shadow-[0_0_20px_rgba(252,238,10,0.18)] relative p-0.5 group-hover:border-primary transition-all">
                  <img
                    src={profilePic}
                    alt={`${PROFILE_INFO.name} Profile`}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  {/* Corner HUD accent */}
                  <div className="absolute bottom-0 right-0 pointer-events-none p-1.5">
                    <Badge
                      variant="secondary"
                      className="bg-surface-container-lowest/95 text-[9px] font-mono text-secondary-foreground px-1.5 py-0.5 flex items-center gap-1 border border-secondary-foreground/50 shadow-[0_0_8px_rgba(0,240,255,0.35)]"
                    >
                      {PROFILE_INFO.operativeId}
                      <span className="w-1.5 h-1.5 bg-secondary-foreground animate-ping rounded-full inline-block"></span>
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Name, Roles, Clearance & Bio Dossier */}
              <div className="flex-1 flex flex-col justify-start w-full">
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <CardTitle className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl uppercase font-bold tracking-tight text-primary drop-shadow-[0_0_12px_rgba(252,238,10,0.25)]">
                    {PROFILE_INFO.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="font-mono text-xs text-foreground font-bold border-border uppercase"
                  >
                    BASE: {PROFILE_INFO.baseOfOperations}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="font-mono text-xs text-primary font-bold border-primary/50 shadow-[0_0_8px_rgba(252,238,10,0.25)] uppercase"
                  >
                    {PROFILE_INFO.clearanceLevel}
                  </Badge>
                </div>

                <CardDescription className="font-title-md text-sm sm:text-base text-secondary-foreground font-mono mb-4">
                  {PROFILE_INFO.role} // NestJS • TypeScript • PostgreSQL • Docker • React
                </CardDescription>

                <p className="font-body-lg text-body-md sm:text-body-lg text-muted-foreground leading-relaxed">
                  {PROFILE_INFO.bio}
                </p>
              </div>
            </div>

            <Separator className="bg-border mt-2" />

            {/* Skills Matrix with Shadcn Badges */}
            <SkillsMatrix />
          </CardContent>
        </div>

        {/* Primary Action Buttons using Shadcn Button */}
        <CardFooter className="flex flex-wrap items-center gap-3 p-5 sm:p-6 pt-5 border-t border-border bg-surface-container-low/40">
          <Button
            variant="default"
            asChild
            className="font-mono font-bold uppercase tracking-wider clip-chamfer h-10 px-5 gap-2 cursor-pointer shadow-lg hover:shadow-primary/25"
          >
            <a href={PROFILE_INFO.linkedinUrl} target="_blank" rel="noreferrer">
              <LinkedinIcon className="size-4" />
              [ JACK IN // LINKEDIN ]
            </a>
          </Button>

          <Button
            variant="secondary"
            asChild
            className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 border border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-background cursor-pointer"
          >
            <a href={PROFILE_INFO.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              [ FETCH // GITHUB ]
            </a>
          </Button>

          <Button
            variant="destructive"
            asChild
            className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 cursor-pointer"
          >
            <a href={`mailto:${PROFILE_INFO.email}`}>
              <Mail className="size-4" />
              [ PING // EMAIL ]
            </a>
          </Button>

          <Button
            variant="outline"
            asChild
            className="font-mono uppercase font-bold tracking-wider clip-chamfer h-10 px-4 gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <a href={cvUrl} download={PROFILE_INFO.cvFileName}>
              <FileDown className="size-4" />
              [ EXPORT // CV ]
            </a>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

import React from "react";
import profilePic from "@/assets/profile-pic.png";
import { ZoomableImage } from "@/components/ZoomableImage";
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
          {/* Top Header with Compact Avatar & Spec Details */}
          <CardHeader className="bg-surface-container-low/70 border-b border-border p-5 sm:p-6 pb-6">
            {/* Top metadata strip */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-4">
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

            {/* Compact Avatar + Identity Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Profile Picture with HUD frame */}
              <div className="relative group shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-none border-2 border-primary/40 bg-surface-container-lowest overflow-hidden shadow-lg relative p-0.5 group-hover:border-primary transition-colors">
                  <ZoomableImage
                    src={profilePic}
                    alt={`${PROFILE_INFO.name} Profile`}
                    caption={`${PROFILE_INFO.name} — ${PROFILE_INFO.role} & Backend Architect (ID: ${PROFILE_INFO.operativeId})`}
                    badgeLabel="OPERATIVE ID"
                    className="w-full h-full object-cover filter contrast-105"
                    wrapperClassName="w-full h-full"
                  />
                  {/* Corner HUD accent */}
                  <div className="absolute bottom-0 right-0 pointer-events-none p-1">
                    <Badge
                      variant="secondary"
                      className="bg-surface-container-lowest/90 text-[8px] font-mono text-secondary-foreground px-1 py-0 flex items-center gap-1"
                    >
                      {PROFILE_INFO.operativeId}
                      <span className="w-1 h-1 bg-secondary-foreground animate-ping rounded-full inline-block"></span>
                    </Badge>
                  </div>
                </div>
                <span className="block text-center font-mono text-[9px] text-muted-foreground mt-1 tracking-wider">
                  CLICK TO ZOOM
                </span>
              </div>

              {/* Name, Role & Clearance Badges */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <CardTitle className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl uppercase font-bold tracking-tight text-primary">
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
                    className="font-mono text-xs text-primary font-bold border-primary/40 uppercase"
                  >
                    {PROFILE_INFO.clearanceLevel}
                  </Badge>
                </div>

                <CardDescription className="font-title-md text-sm sm:text-base text-secondary-foreground font-mono">
                  {PROFILE_INFO.role} // NestJS • TypeScript • PostgreSQL • Docker • React
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-5 sm:p-6 pt-6 space-y-6">
            <p className="font-body-lg text-body-lg text-muted-foreground max-w-4xl leading-relaxed">
              {PROFILE_INFO.bio}
            </p>

            <Separator className="bg-border" />

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

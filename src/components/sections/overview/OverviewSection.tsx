import React from "react";
import { ProfileCard } from "./ProfileCard";
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
    <section
      id="overview"
      className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-space-md mb-space-xl items-stretch"
    >
      {/* Mugshot Tactical Card */}
      <div className="lg:col-span-3">
        <ProfileCard />
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

              <CardTitle className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight text-primary">
                {PROFILE_INFO.name}
              </CardTitle>
              <CardDescription className="font-title-md text-title-md text-secondary-foreground font-mono mt-1">
                {PROFILE_INFO.role} // NestJS • TypeScript • PostgreSQL • Docker • React
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-5 space-y-6">
              <p className="font-body-lg text-body-lg text-muted-foreground max-w-3xl leading-relaxed">
                {PROFILE_INFO.bio}
              </p>

              <Separator className="bg-border" />

              {/* Skills Matrix with Shadcn Badges */}
              <SkillsMatrix />
            </CardContent>
          </div>

          {/* Primary Action Buttons using Shadcn Button */}
          <CardFooter className="flex flex-wrap items-center gap-3 pt-6 border-t border-border bg-surface-container-low/40">
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
      </div>
    </section>
  );
};

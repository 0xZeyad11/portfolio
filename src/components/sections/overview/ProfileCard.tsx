import React from "react";
import profilePic from "@/assets/profile-pic.png";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROFILE_INFO } from "@/constants/profile";

export const ProfileCard: React.FC = () => {
  return (
    <Card className="bg-surface-container border-border clip-chamfer shadow-xl relative group h-full flex flex-col justify-between">
      <CardHeader className="p-3 bg-surface-container-low border-b border-border flex flex-row items-center justify-between space-y-0">
        <span className="font-label-sm text-primary font-bold tracking-widest uppercase">
          BASE OF OPERATIONS
        </span>
        <Badge variant="outline" className="font-mono text-foreground font-bold border-border">
          {PROFILE_INFO.baseOfOperations}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 flex flex-col items-center">
        <div className="relative w-4/5 mx-auto overflow-hidden flex items-center justify-center border border-border shadow-lg bg-surface-container-lowest">
          <ZoomableImage
            src={profilePic}
            alt={`${PROFILE_INFO.name} Profile`}
            caption={`${PROFILE_INFO.name} — ${PROFILE_INFO.role} & Backend Architect (ID: ${PROFILE_INFO.operativeId})`}
            badgeLabel="OPERATIVE ID"
            className="w-full h-auto object-contain filter contrast-105"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between z-10">
            <div className="flex justify-start">
              <Badge
                variant="outline"
                className="bg-surface-container-lowest/80 text-[8px] font-mono text-primary border-primary/40"
              >
                ID: {PROFILE_INFO.operativeId}
              </Badge>
            </div>
            <div className="flex justify-end">
              <Badge
                variant="secondary"
                className="bg-surface-container-lowest/80 text-[8px] font-mono text-secondary-foreground flex items-center gap-1"
              >
                UPLINK
                <span className="w-1.5 h-1.5 bg-secondary-foreground animate-ping rounded-full inline-block"></span>
              </Badge>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full bg-surface-container-low p-2 border border-border/50 text-center">
          <span className="font-label-sm text-muted-foreground font-mono block">CLEARANCE LEVEL</span>
          <span className="font-label-md text-primary font-bold font-mono">
            {PROFILE_INFO.clearanceLevel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

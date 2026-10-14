import React, { type HTMLAttributes } from 'react';
import { 
  Card as ShadcnCard, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface CyberCardProps extends HTMLAttributes<HTMLDivElement> {
  metadata?: string[];
  size?: 'default' | 'sm';
}

export const Card = React.forwardRef<HTMLDivElement, CyberCardProps>(({ 
  children, 
  metadata = ['NC-NET: SECURE', 'RAM: 64TB', 'BUFFER: ACTIVE'],
  className,
  size = 'default',
  ...props 
}, ref) => {
  return (
    <ShadcnCard 
      ref={ref}
      size={size}
      className={cn(
        "relative bg-card/90 border border-border clip-chamfer flex flex-col backdrop-blur-sm shadow-xl",
        className
      )}
      {...props}
    >
      {/* Utility / Telemetry Bar */}
      {metadata && metadata.length > 0 && (
        <div className="flex flex-wrap gap-4 px-4 py-1.5 border-b border-border bg-surface-container-low/60">
          {metadata.map((meta, i) => (
            <span key={i} className="font-mono text-[9px] font-medium tracking-[0.12em] text-secondary-foreground">
              {meta}
            </span>
          ))}
        </div>
      )}
      
      <div className="p-6 relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </ShadcnCard>
  );
});

Card.displayName = 'Card';
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

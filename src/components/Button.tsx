import React, { type ButtonHTMLAttributes } from 'react';
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'hostile' | 'default' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon';
  labelCode?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'primary', 
  labelCode,
  className,
  ...props 
}, ref) => {
  if (variant === 'primary') {
    return (
      <ShadcnButton 
        ref={ref}
        variant="default"
        className={cn(
          "relative font-space uppercase tracking-widest font-bold text-xs bg-primary text-primary-foreground hover:bg-primary/90 clip-chamfer transition-all duration-150 px-5 py-2.5 h-auto cursor-pointer",
          className
        )}
        {...props}
      >
        {labelCode && (
          <span className="absolute top-0.5 right-1.5 text-[8px] font-mono opacity-60">[{labelCode}]</span>
        )}
        {children}
      </ShadcnButton>
    );
  }

  if (variant === 'secondary') {
    return (
      <ShadcnButton 
        ref={ref}
        variant="outline"
        className={cn(
          "font-space uppercase tracking-widest font-bold text-xs border border-secondary-foreground/40 text-secondary-foreground bg-secondary/80 hover:bg-secondary-foreground hover:text-background clip-chamfer transition-all duration-150 px-5 py-2.5 h-auto cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }

  if (variant === 'hostile' || variant === 'destructive') {
    return (
      <ShadcnButton 
        ref={ref}
        variant="destructive"
        className={cn(
          "font-space uppercase tracking-widest font-bold text-xs border border-destructive text-destructive-foreground hover:bg-destructive hover:text-white clip-chamfer transition-all duration-150 px-5 py-2.5 h-auto cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton 
      ref={ref}
      variant={variant as any}
      className={className}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
});

Button.displayName = 'Button';
export { buttonVariants };

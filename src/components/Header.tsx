import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Header: React.FC<HeaderProps> = ({ 
  children, 
  level = 1,
  className = '', 
  ...props 
}) => {
  const sizes: Record<number, string> = {
    1: "text-[40px] md:text-[56px] leading-[48px] md:leading-[64px] tracking-[-0.03em]",
    2: "text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] tracking-[-0.02em]",
    3: "text-[24px] md:text-[28px] leading-[32px] md:leading-[36px]",
    4: "text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0.02em]",
    5: "text-[18px] leading-[24px]",
    6: "text-[16px] leading-[22px]",
  };

  const fontClass = level <= 4 ? "font-headline-lg font-bold uppercase" : "font-body-lg font-semibold";
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return React.createElement(
    Component,
    {
      className: cn(fontClass, sizes[level], "text-foreground", className),
      ...props
    },
    children
  );
};

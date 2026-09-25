import React, { HTMLAttributes } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Header: React.FC<HeaderProps> = ({ 
  children, 
  level = 1,
  className = '', 
  ...props 
}) => {
  const sizes = {
    1: "text-[56px] leading-[64px] tracking-[-0.03em]",
    2: "text-[40px] leading-[48px] tracking-[-0.02em]",
    3: "text-[28px] leading-[36px]",
    4: "text-[20px] leading-[28px] tracking-[0.02em]",
    5: "text-[18px] leading-[24px]",
    6: "text-[16px] leading-[22px]",
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  // level 1-4 use Space Grotesk (font-display), level 5-6 use Chivo (font-body)
  const fontClass = level <= 4 ? "font-display font-bold uppercase" : "font-body font-semibold";

  return (
    <Tag 
      className={`${fontClass} ${sizes[level]} text-cyber-text ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

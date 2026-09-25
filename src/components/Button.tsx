import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'hostile';
  labelCode?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  labelCode = 'ACT_01',
  className = '', 
  ...props 
}) => {
  const baseClasses = "relative px-6 py-3 font-display uppercase tracking-widest font-bold text-sm transition-all duration-0 cursor-pointer group flex items-center justify-center";
  
  if (variant === 'primary') {
    return (
      <button 
        className={`${baseClasses} bg-cyber-primary text-cyber-base-0 hover:bg-cyber-secondary clip-chamfer ${className}`}
        {...props}
      >
        <span className="absolute top-1 right-2 text-[8px] font-mono opacity-60">[{labelCode}]</span>
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button 
        className={`${baseClasses} border border-cyber-secondary text-cyber-secondary bg-cyber-secondary/5 hover:bg-cyber-secondary hover:text-cyber-base-0 clip-chamfer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  // hostile
  return (
    <button 
      className={`${baseClasses} border border-cyber-tertiary text-cyber-tertiary hover:glow-red-hover hover:translate-x-[2px] hover:-translate-y-[2px] clip-chamfer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  metadata?: string[];
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  metadata = ['NC-NET: SECURE', 'RAM: 64TB', 'BUFFER: ACTIVE'],
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`relative bg-cyber-base-1 border border-cyber-base-3 clip-chamfer border-corner-bracket flex flex-col ${className}`}
      {...props}
    >
      {/* Utility Bar */}
      {metadata && metadata.length > 0 && (
        <div className="flex flex-wrap gap-4 px-4 py-1 border-b border-cyber-base-3 bg-cyber-base-2/30">
          {metadata.map((meta, i) => (
            <span key={i} className="font-mono text-[9px] font-medium tracking-[0.12em] text-cyber-secondary">
              {meta}
            </span>
          ))}
        </div>
      )}
      
      <div className="p-6 relative z-10">
        {children}
      </div>
    </div>
  );
};

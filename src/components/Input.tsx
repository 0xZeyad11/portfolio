import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label,
  className = '', 
  placeholder,
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-cyber-text font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyber-primary"></div>
        <input 
          className={`w-full bg-cyber-base-1 border border-transparent focus:border-cyber-secondary px-4 py-3 pl-6 font-mono text-[13px] text-cyber-text outline-none transition-colors duration-0 ${className}`}
          placeholder={placeholder ? `// ${placeholder.toUpperCase()}` : '// ENTER_QUERY_STRING...'}
          {...props}
        />
      </div>
    </div>
  );
};

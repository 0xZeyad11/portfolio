import React, { type InputHTMLAttributes } from 'react';
import { Input as ShadcnInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ 
  label,
  className, 
  placeholder,
  ...props 
}, ref) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-muted-foreground font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary z-10"></div>
        <ShadcnInput 
          ref={ref}
          className={cn(
            "w-full bg-surface-container/70 border-border focus-visible:border-secondary-foreground pl-4 font-mono text-[13px] text-foreground outline-none transition-colors duration-150 h-10 rounded-sm",
            className
          )}
          placeholder={placeholder ? `// ${placeholder.toUpperCase()}` : '// ENTER_QUERY_STRING...'}
          {...props}
        />
      </div>
    </div>
  );
});

Input.displayName = 'Input';
export { ShadcnInput };

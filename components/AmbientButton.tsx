import React, { useState } from 'react';

interface AmbientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  glowColor?: string;
  as?: 'button' | 'a';
  href?: string;
}

const AmbientButton: React.FC<AmbientButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  glowColor = 'rgba(34, 211, 238, 0.6)', // Cyan glow
  as = 'button',
  onClick,
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Extended duration for the flash
    if (onClick) onClick(e as any);
  };

  const baseStyles = "relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-out overflow-hidden group active:scale-95";
  
  const variants = {
    primary: "bg-slate-900 text-white dark:bg-cyan-500/10 dark:text-cyan-200 border border-slate-700 dark:border-cyan-500/30 hover:border-cyan-400 dark:hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    ghost: "bg-transparent text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300",
    outline: "bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
  };

  const Comp = as as any;

  return (
    <Comp
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {/* Click Flash - Intense center burst */}
      <span 
        className={`absolute inset-0 bg-cyan-400/50 blur-md transition-opacity duration-500 ${isClicked ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none' }}
      />
      {/* Click Flash - Wide soft glow */}
      <span 
        className={`absolute -inset-4 bg-cyan-500/20 blur-xl transition-opacity duration-700 ${isClicked ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Hover Ambient Glow (Bottom) */}
      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-cyan-500/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <span className="relative flex items-center gap-2 z-10">
        {children}
      </span>
    </Comp>
  );
};

export default AmbientButton;

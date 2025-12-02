import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Atom, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 block py-2 md:py-0 ${
      isActive
        ? 'text-cyan-600 dark:text-cyan-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center gap-2 group relative z-50" onClick={() => setIsOpen(false)}>
          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 group-hover:bg-cyan-500/10 transition-colors">
            <Atom className="w-5 h-5 text-slate-700 dark:text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
            Jin Yan
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/research" className={linkClass}>Research</NavLink>
          <NavLink to="/publications" className={linkClass}>Publications</NavLink>
          <NavLink to="/teaching" className={linkClass}>Teaching</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
           <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 text-slate-600 dark:text-slate-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-0 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-in-out md:hidden flex flex-col pt-20 pb-6 px-6 space-y-2 origin-top transform ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <NavLink to="/research" className={linkClass} onClick={() => setIsOpen(false)}>Research</NavLink>
        <NavLink to="/publications" className={linkClass} onClick={() => setIsOpen(false)}>Publications</NavLink>
        <NavLink to="/teaching" className={linkClass} onClick={() => setIsOpen(false)}>Teaching</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
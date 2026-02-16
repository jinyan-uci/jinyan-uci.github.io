import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { personalInfo } from '../data';
import { useTheme } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Talks', path: '/talks' },
  ];

  const baseLinkStyles = "text-sm font-medium transition-colors duration-200";
  const activeLinkStyles = "text-accent-600 dark:text-accent-500";
  const inactiveLinkStyles = "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <NavLink 
          to="/" 
          className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          {personalInfo.name}
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `${baseLinkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-800 dark:text-neutral-200"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-card border-b border-neutral-200 dark:border-neutral-800 shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-base font-medium py-2 ${isActive ? activeLinkStyles : inactiveLinkStyles}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
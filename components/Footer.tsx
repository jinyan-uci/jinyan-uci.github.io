import React from 'react';
import { personalInfo } from '../data';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-neutral-200 dark:border-dark-border bg-neutral-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href={`mailto:${personalInfo.email}`} className="text-neutral-500 hover:text-accent-500 transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-accent-500 transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-accent-500 transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-accent-500 transition-colors" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
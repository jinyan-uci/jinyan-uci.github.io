import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title, subtitle }) => {
  return (
    <section id={id} className={`py-24 relative z-10 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-6 opacity-80" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

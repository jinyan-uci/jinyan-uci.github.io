import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Research: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = selectedTag 
    ? projects.filter(p => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <Section>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Research</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            My work focuses on the intersection of nanophotonics and artificial intelligence, aiming to bridge the gap between physical optics and digital computing.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedTag === null
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col bg-white dark:bg-dark-card border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.link && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} className="text-neutral-900 dark:text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-semibold tracking-wide text-accent-600 dark:text-accent-400 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors mt-auto"
                    >
                      View Project <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  );
};

export default Research;
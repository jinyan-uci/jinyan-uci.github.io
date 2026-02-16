import React from 'react';
import Section from '../components/Section';
import { talks } from '../data';
import { MapPin, Calendar, MonitorPlay, FileBarChart } from 'lucide-react';

const Talks: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <Section>
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Talks</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Selected conference presentations, seminars, and invited talks.
          </p>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
          {talks.map((talk) => (
            <div key={talk.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-accent-500 transition-colors ring-4 ring-neutral-50 dark:ring-dark-bg" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-accent-600 dark:text-accent-500">
                  {talk.type}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-neutral-500 font-medium">
                  <Calendar size={14} /> {talk.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                {talk.title}
              </h3>
              
              <div className="text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                {talk.event}
              </div>
              
              <div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-4">
                <MapPin size={14} /> {talk.location}
              </div>

              {/* Resources */}
              <div className="flex gap-3">
                {talk.slides && (
                  <a href={talk.slides} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-card border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-accent-300 dark:hover:border-accent-700 hover:text-accent-600 dark:hover:text-accent-400 transition-all shadow-sm">
                    <FileBarChart size={16} /> Slides
                  </a>
                )}
                {talk.video && (
                  <a href={talk.video} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-card border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-accent-300 dark:hover:border-accent-700 hover:text-accent-600 dark:hover:text-accent-400 transition-all shadow-sm">
                    <MonitorPlay size={16} /> Recording
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Talks;
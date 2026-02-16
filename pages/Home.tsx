import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Tag } from 'lucide-react';
import Section from '../components/Section';
import { personalInfo, news } from '../data';

const Home: React.FC = () => {
  const recentNews = news.slice(0, 4); // Show top 4 news items

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-accent-600 dark:text-accent-500 mb-8">
          {personalInfo.title}
        </p>
        <div className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-4 mb-10">
          <p>{personalInfo.shortBio}</p>
          <p className="text-base text-neutral-500 dark:text-neutral-400">
            Currently at {personalInfo.affiliation}.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/research" 
            className="group flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-full font-medium transition-transform active:scale-95 hover:bg-neutral-800 dark:hover:bg-neutral-100"
          >
            View Research <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#" // Dummy CV link
            className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 px-6 py-3 rounded-full font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </Section>

      {/* News Section */}
      <Section delay={0.2} className="border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Recent News</h2>
          <span className="text-sm font-mono text-neutral-400">Timeline</span>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-10 py-2">
          {recentNews.map((item, index) => (
            <div key={item.id} className="relative pl-8 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-dark-bg" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <span className="text-sm font-medium text-accent-600 dark:text-accent-500 mb-1 sm:mb-0">
                  {item.date}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-medium">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.link && (
                <a href={item.link} className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-neutral-900 dark:hover:text-white mt-2 transition-colors">
                  Read more <ArrowRight size={12} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
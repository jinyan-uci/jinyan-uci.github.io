import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import Section from '../components/Section';
import { personalInfo, news, publications, talks } from '../data';

const Home: React.FC = () => {
  const recentNews = news.slice(0, 4); // Show top 4 news items
  const selectedPubs = publications.slice(0, 3); // Top 3 publications
  const selectedTalks = talks.slice(0, 2); // Top 2 talks

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-between mb-16">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
            {personalInfo.name}
          </h1>
          <p className="text-lg font-medium text-accent-600 dark:text-accent-500 mb-6">
            {personalInfo.title}
          </p>
          <div className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-4 mb-8">
            <p>{personalInfo.shortBio}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Currently at {personalInfo.affiliation}.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              to="/research" 
              className="group flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 rounded-full text-sm font-medium transition-transform active:scale-95 hover:bg-neutral-800 dark:hover:bg-neutral-100"
            >
              View Research <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#" // Dummy CV link
              className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              CV <Download size={14} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-2xl rotate-3"></div>
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="relative w-full h-full object-cover rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm"
            />
          </div>
        </div>
      </Section>

      {/* Selected Publications */}
      <Section delay={0.1} className="border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Selected Publications</h2>
          <Link to="/publications" className="text-sm font-medium text-accent-600 dark:text-accent-500 hover:text-accent-800 dark:hover:text-accent-300 flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {selectedPubs.map((pub) => (
            <div key={pub.id} className="group block p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white leading-snug mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {pub.venue}, {pub.year}
                  </p>
                </div>
                {pub.doi && (
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected Talks */}
      <Section delay={0.2} className="border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Selected Talks</h2>
          <Link to="/talks" className="text-sm font-medium text-accent-600 dark:text-accent-500 hover:text-accent-800 dark:hover:text-accent-300 flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedTalks.map((talk) => (
            <div key={talk.id} className="bg-neutral-50 dark:bg-dark-card border border-neutral-100 dark:border-neutral-800 rounded-xl p-5">
              <span className="text-xs font-bold tracking-wider uppercase text-accent-600 dark:text-accent-500 block mb-2">
                {talk.type}
              </span>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 leading-tight">
                {talk.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mt-auto pt-2">
                 <span className="flex items-center gap-1.5"><Calendar size={12} /> {talk.date}</span>
                 <span className="flex items-center gap-1.5"><MapPin size={12} /> {talk.event}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Recent News */}
      <Section delay={0.3} className="border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Recent News</h2>
          <span className="text-xs font-mono text-neutral-400">Updates</span>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8 py-1">
          {recentNews.map((item) => (
            <div key={item.id} className="relative pl-8 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-dark-bg" />
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm font-medium text-neutral-900 dark:text-white">
                  {item.title}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import Section from '../components/Section';
import { publications } from '../data';
import { Search, FileText, ExternalLink, Copy, Check, Quote } from 'lucide-react';

const Publications: React.FC = () => {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState<string>('All');
  const [expandedBib, setExpandedBib] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const years = ['All', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a).map(String)];

  const filteredPubs = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(search.toLowerCase()) || 
                          pub.authors.some(a => a.toLowerCase().includes(search.toLowerCase())) ||
                          pub.venue.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter === 'All' || pub.year.toString() === yearFilter;
    return matchesSearch && matchesYear;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <Section>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Publications</h1>
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 sticky top-24 z-10 bg-neutral-50/90 dark:bg-dark-bg/90 backdrop-blur-sm py-4 -mx-2 px-2 rounded-lg">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input 
              type="text" 
              placeholder="Search publications..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-card border border-neutral-200 dark:border-neutral-800 rounded-lg focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 outline-none transition-all text-neutral-900 dark:text-white"
            />
          </div>
          
          <select 
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-dark-card border border-neutral-200 dark:border-neutral-800 rounded-lg focus:border-accent-500 outline-none text-neutral-700 dark:text-neutral-300 min-w-[120px]"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* List */}
        <div className="space-y-6">
          {filteredPubs.map((pub) => (
            <div key={pub.id} className="group p-6 bg-white dark:bg-dark-card rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-accent-100 dark:hover:border-accent-900 transition-all duration-200">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-tight mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2 text-sm">
                    {pub.authors.map((author, i) => (
                      <span key={i} className={author.includes('J. Yan') ? 'font-semibold text-neutral-900 dark:text-neutral-200' : ''}>
                        {author}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-500">
                    <span className="font-medium italic text-neutral-700 dark:text-neutral-300">{pub.venue}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    {pub.tags.length > 0 && (
                       <>
                        <span>•</span>
                        <span className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400">{pub.tags[0]}</span>
                       </>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-5">
                {pub.pdf && (
                  <a href={pub.pdf} className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-accent-200 dark:hover:border-accent-800">
                    <FileText size={14} /> PDF
                  </a>
                )}
                {pub.doi && (
                  <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-accent-200 dark:hover:border-accent-800">
                    <ExternalLink size={14} /> DOI
                  </a>
                )}
                {pub.arxiv && (
                  <a href={`https://arxiv.org/abs/${pub.arxiv}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-red-700/80 dark:text-red-400/80 hover:text-red-700 dark:hover:text-red-400 transition-colors px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-red-200 dark:hover:border-red-900/50">
                    arXiv
                  </a>
                )}
                {pub.bibtex && (
                  <button 
                    onClick={() => setExpandedBib(expandedBib === pub.id ? null : pub.id)}
                    className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-accent-200 dark:hover:border-accent-800 ml-auto"
                  >
                    <Quote size={14} /> BibTeX
                  </button>
                )}
              </div>

              {/* BibTeX Drawer */}
              {expandedBib === pub.id && pub.bibtex && (
                <div className="mt-4 p-4 bg-neutral-50 dark:bg-black rounded-lg border border-neutral-200 dark:border-neutral-800 relative animate-fade-in">
                  <pre className="text-xs font-mono overflow-x-auto text-neutral-700 dark:text-neutral-300 pr-10 whitespace-pre-wrap break-all sm:break-normal">
                    {pub.bibtex}
                  </pre>
                  <button 
                    onClick={() => handleCopy(pub.bibtex!, pub.id)}
                    className="absolute top-2 right-2 p-2 rounded-md hover:bg-white dark:hover:bg-neutral-800 text-neutral-500 hover:text-accent-600 transition-all"
                    title="Copy to clipboard"
                  >
                    {copied === pub.id ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              )}
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <div className="text-center py-12 text-neutral-400">
              No publications found matching your search.
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Publications;
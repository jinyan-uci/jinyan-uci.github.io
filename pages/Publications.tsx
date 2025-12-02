import React from 'react';
import Section from '../components/Section';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Publication } from '../types';

const pubs: Publication[] = [
  {
    id: "1",
    title: "Enhanced Third-Harmonic Generation in ENZ Metasurfaces",
    authors: ["Jin Yan", "A. Collaborator", "B. Professor", "H. Lee"],
    journal: "Nano Letters",
    year: "2024",
    doi: "10.1021/acs.nanolett.xxxx",
    link: "#"
  },
  {
    id: "2",
    title: "All-dielectric Meta-fiber for Orbital Angular Momentum Generation",
    authors: ["C. Colleague", "Jin Yan", "H. Lee"],
    journal: "Optics Express",
    year: "2023",
    doi: "10.1364/OE.xxxx",
    link: "#"
  },
  {
    id: "3",
    title: "Deep Learning Assisted Design of Nanophotonic Structures",
    authors: ["Jin Yan", "D. Researcher"],
    journal: "arXiv Preprint",
    year: "2023",
    link: "#"
  }
];

const Publications: React.FC = () => {
  return (
    <div className="pt-16">
      <Section title="Publications" subtitle="Selected journal articles and preprints.">
        <div className="space-y-6">
          {pubs.map((pub) => (
            <div key={pub.id} className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors py-2">
              <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 transition-colors"></span>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                   {pub.title}
                </a>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {pub.authors.map((author, i) => (
                  <span key={i} className={author === "Jin Yan" ? "font-bold text-slate-900 dark:text-slate-200" : ""}>
                    {author}{i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              
              <div className="flex items-center gap-4 mt-3 text-sm font-medium text-slate-500 dark:text-slate-500">
                <span className="italic font-serif text-slate-700 dark:text-slate-300">{pub.journal}</span>
                <span>•</span>
                <span>{pub.year}</span>
                {pub.link && (
                    <a href={pub.link} className="flex items-center gap-1 hover:text-cyan-500 transition-colors ml-auto">
                        View Paper <ExternalLink className="w-3 h-3" />
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

export default Publications;

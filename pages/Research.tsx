import React, { useState } from 'react';
import Section from '../components/Section';
import { Microscope, Activity, Code2 } from 'lucide-react';

const DynamicIcon = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 1000);
  };

  return (
    <div 
      onClick={handleClick}
      className={`
        p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 shrink-0 cursor-pointer 
        transition-all duration-500 ease-out border border-transparent
        ${active ? `scale-110 shadow-[0_0_25px_currentColor] border-cyan-400/50 ${colorClass}` : 'hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700'}
      `}
    >
      <div className={`transition-transform duration-700 ease-in-out ${active ? 'rotate-[360deg]' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Research: React.FC = () => {
  const topics = [
    {
      icon: <Microscope className="w-8 h-8 text-cyan-500" />,
      color: "text-cyan-500",
      title: "Meta-optical Fibers",
      content: "Exploring the integration of dielectric metasurfaces on optical fiber facets. This enables complex wavefront manipulation—such as focusing, beam steering, and vortex generation—directly from a fiber output, bypassing bulky free-space optics.",
      tags: ["Nanofabrication", "FIB", "Wavefront Shaping"]
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      color: "text-purple-500",
      title: "Nonlinear Optics & ENZ",
      content: "Investigating Epsilon-Near-Zero (ENZ) materials like ITO to achieve extreme nonlinear optical responses. My research focuses on enhancing Third-Harmonic Generation (THG) and ultrafast optical switching dynamics in these regimes.",
      tags: ["ITO", "THG", "Ultrafast Dynamics"]
    },
    {
      icon: <Code2 className="w-8 h-8 text-pink-500" />,
      color: "text-pink-500",
      title: "Computational Photonics",
      content: "Developing clean, reproducible simulation workflows using FDTD and FEM methods. I also build Python toolkits for automated data acquisition and analysis in nonlinear optical experiments, emphasizing code quality and reproducibility.",
      tags: ["Python", "FDTD", "Machine Learning"]
    }
  ];

  return (
    <div className="pt-16">
      <Section title="Research Areas" subtitle="My academic focus lies at the intersection of nanophotonics fabrication, nonlinear optical characterization, and computational modeling.">
        <div className="grid gap-12 mt-8">
          {topics.map((topic, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-colors group">
              <DynamicIcon colorClass={topic.color}>
                {topic.icon}
              </DynamicIcon>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{topic.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {topic.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Research;
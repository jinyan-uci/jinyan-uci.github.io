import React from 'react';
import Section from '../components/Section';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import AmbientButton from '../components/AmbientButton';

const Teaching: React.FC = () => {
  return (
    <div className="pt-16">
      <Section title="Teaching" subtitle="Experience as a Teaching Assistant at UCI Physics.">
        <div className="grid gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Physics 7C/D/E: Classical Physics</h3>
              <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">2021 - Present</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Led discussion sections and labs for undergraduate engineering and physics majors. Focused on interactive problem-solving strategies for mechanics, electricity, and magnetism.
            </p>
          </div>
           <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Computational Physics Workshop</h3>
              <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">Summer 2022</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Assisted in teaching Python for data analysis (NumPy, SciPy, Matplotlib) emphasizing clean code practices and reproducible figures.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Get in Touch" id="contact" className="pb-32">
        <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-800">
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new collaborations in meta-optics or computational physics. 
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
             <div className="flex items-center gap-3 justify-center text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                   <Mail className="w-5 h-5 text-cyan-500" />
                </div>
                <span>jin.yan@uci.edu</span>
             </div>
             <div className="flex items-center gap-3 justify-center text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                   <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <span>Irvine, CA</span>
             </div>
          </div>

          <a href="mailto:jin.yan@uci.edu">
            <AmbientButton variant="primary" className="mx-auto">
              Send an Email
            </AmbientButton>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Teaching;

import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import AmbientButton from '../components/AmbientButton';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="max-w-5xl mx-auto px-6 z-10 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            PhD Candidate · UCI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Exploring Light at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
              Nanoscale
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Hi, I’m <strong>Jin Yan</strong>. I research nanophotonics, meta-optics, and nonlinear phenomena at the Lee Nano-Optics Lab.
            <br className="hidden md:block" />
            My work focuses on building cleaner experiments and cleaner code to understand light-matter interaction.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/research">
              <AmbientButton>
                View Research <ArrowRight className="w-4 h-4" />
              </AmbientButton>
            </Link>
            
            <Link to="/publications">
              <AmbientButton variant="outline">
                Publications
              </AmbientButton>
            </Link>

            <div className="flex gap-4 ml-2 pl-4 border-l border-slate-300 dark:border-slate-700">
              <a href="mailto:contact@example.com" className="text-slate-400 hover:text-cyan-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Graphic (CSS-based optics visual) */}
        <div className="md:col-span-4 relative hidden md:block">
           <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-4 border border-slate-200 dark:border-slate-700/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5 dark:bg-slate-900/10">
                 <div className="w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.4)]"></div>
                 </div>
              </div>
              {/* Orbital particles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute inset-8 animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_cyan] -translate-x-1/2 translate-y-1/2"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleNetwork from './components/ParticleNetwork';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Default to dark mode for better laser effect
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check system preference or localStorage
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    if (saved) {
      setTheme(saved);
    } else {
        // Force dark initially for the prompt's "Night Mode" preference
        setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
         <ParticleNetwork />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/contact" element={<Teaching />} /> {/* Reusing teaching page for contact */}
          </Routes>
        </main>

        <footer className="py-8 text-center text-slate-500 dark:text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Jin Yan. Built with React & Tailwind.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

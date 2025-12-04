import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Skills scrollY={scrollY} />
      <Projects scrollY={scrollY} />
      <Experience scrollY={scrollY} />
      <Education scrollY={scrollY} />
      <Contact scrollY={scrollY} />
    </div>
  );
}
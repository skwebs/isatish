import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-sky-400 font-semibold mb-4 tracking-wide uppercase text-sm">Hello, I'm</p>
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-none">
          Satish Kumar <br className="hidden md:block" /> Sharma
        </h1>
        <h2 className="text-2xl md:text-4xl text-slate-400 font-bold mb-8">
          Full-Stack & Mobile App Developer
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Self-taught developer passionate about building scalable web and mobile applications. 
          Specialist in <span className="text-white font-medium">React, Next.js, and Laravel</span> with a focus on solving real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1">
            View My Work <ArrowRight size={20} />
          </a>
          <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-sky-500/30 hover:bg-sky-500/10 text-sky-400 font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1">
            <Github size={20} /> GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Twitter, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] py-4 transition-all duration-500 ease-in-out ${scrolled || isOpen ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent shadow-none'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter" onClick={() => setIsOpen(false)}>
            <span className="text-sky-400">i</span>Satish
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-sky-400 transition-colors">About</Link>
            <Link href="#skills" className="text-sm font-medium hover:text-sky-400 transition-colors">Skills</Link>
            <Link href="#projects" className="text-sm font-medium hover:text-sky-400 transition-colors">Projects</Link>
            <div className="flex items-center gap-5 ml-4 pl-6 border-l border-white/10">
              <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <button 
            className="md:hidden text-white p-2 -mr-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-[90] transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center gap-8 pt-24 px-6 h-full overflow-y-auto">
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium hover:text-sky-400 transition-colors">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="text-2xl font-medium hover:text-sky-400 transition-colors">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-medium hover:text-sky-400 transition-colors">Projects</Link>
          <div className="flex gap-8 mt-4">
            <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={28} /></a>
            <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={28} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

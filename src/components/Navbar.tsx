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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter">
          isatish<span className="text-sky-400">.in</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium hover:text-sky-400 transition-colors">About</Link>
          <Link href="#skills" className="text-sm font-medium hover:text-sky-400 transition-colors">Skills</Link>
          <Link href="#projects" className="text-sm font-medium hover:text-sky-400 transition-colors">Projects</Link>
          <div className="flex items-center gap-5 ml-4 pl-6 border-l border-white/10">
            <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[64px] bg-slate-950 z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-8 pt-20 px-6">
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="text-2xl font-medium">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-medium">Projects</Link>
          <div className="flex gap-8 mt-4">
            <a href="https://github.com/skwebs" target="_blank" rel="noreferrer"><Github size={28} /></a>
            <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer"><Twitter size={28} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

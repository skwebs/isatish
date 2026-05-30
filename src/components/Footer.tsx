import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter mb-6 block">
              isatish<span className="text-sky-400">.in</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Crafting high-performance web and mobile applications with a focus on clean code and exceptional user experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-slate-500 hover:text-sky-400 transition-colors">About</Link>
              <Link href="#skills" className="text-slate-500 hover:text-sky-400 transition-colors">Skills</Link>
              <Link href="#projects" className="text-slate-500 hover:text-sky-400 transition-colors">Projects</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex gap-6">
              <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-all hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-all hover:-translate-y-1">
                <Twitter size={24} />
              </a>
              <a href="mailto:contact@isatish.in" className="text-slate-500 hover:text-sky-400 transition-all hover:-translate-y-1">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Satish Kumar Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            Built with Next.js & Tailwind CSS <Heart size={12} className="text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

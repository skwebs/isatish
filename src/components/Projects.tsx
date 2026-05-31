"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ci4sspdt',
      description: 'Server Side Processing Datatables with CodeIgniter 4. A robust solution for handling large datasets efficiently.',
      tags: ['PHP', 'MySQL', 'Datatables'],
      github: 'https://github.com/skwebs/ci4sspdt',
    },
    {
      title: 'jquery-qrcode',
      description: 'Dynamic browser-side QR code generation plugin. Lightweight and highly customizable.',
      tags: ['JavaScript', 'jQuery', 'SVG'],
      github: 'https://github.com/skwebs/jquery-qrcode',
    },
    {
      title: 'portal-theme-bs5',
      description: 'Developer-focused Bootstrap 5 dashboard template with modern UI components and layouts.',
      tags: ['HTML', 'Sass', 'Bootstrap 5'],
      github: 'https://github.com/skwebs/portal-theme-bs5',
    },
    {
      title: 'bs5-float-label',
      description: 'Modern form design implementation using Bootstrap 5 floating labels for better UX.',
      tags: ['CSS', 'UI/UX'],
      github: 'https://github.com/skwebs/bs5-float-label-form',
    }
  ];

  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gradient"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 max-w-lg"
          >
            Building open-source tools and client solutions that focus on usability and performance.
          </motion.p>
        </div>
        <motion.a 
          href="https://github.com/skwebs" 
          target="_blank" 
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-white font-bold bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
        >
          View GitHub Archive <ArrowUpRight size={20} className="text-sky-400" />
        </motion.a>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-[2.5rem] p-10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={32} className="text-sky-400" />
            </div>
            
            <div className="flex gap-4 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] uppercase tracking-widest font-black text-sky-400/80 bg-sky-500/10 px-3 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 mb-10 flex-grow leading-relaxed text-lg">{project.description}</p>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/5">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-sky-400 transition-colors">
                <Github size={18} /> View Code
              </a>
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
              <span className="text-sm font-bold text-slate-500 italic">Open Source</span>
            </div>
          </motion.div>
        ))}
      </div> */}

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-[2.5rem] p-20 text-center"
      >
        <Code size={48} className="text-sky-400 mx-auto mb-6 opacity-50" />
        <h3 className="text-2xl font-bold mb-4">Portfolio Update in Progress</h3>
        <p className="text-slate-400 max-w-md mx-auto">
          New exciting projects are on the way! I&apos;m currently refreshing my portfolio with my latest work. Stay tuned.
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;

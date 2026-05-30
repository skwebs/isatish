import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ci4sspdt',
      description: 'Server Side Processing Datatables with CodeIgniter 4. A robust solution for handling large datasets in web applications.',
      tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript'],
      github: 'https://github.com/skwebs/ci4sspdt',
      demo: '#'
    },
    {
      title: 'jquery-qrcode',
      description: 'A lightweight and efficient jQuery plugin to dynamically generate QR codes directly in the browser.',
      tags: ['JavaScript', 'jQuery', 'Web API'],
      github: 'https://github.com/skwebs/jquery-qrcode',
      demo: '#'
    },
    {
      title: 'portal-theme-bs5',
      description: 'A free, modern Bootstrap 5 Admin Dashboard Template designed for developers to jumpstart their projects.',
      tags: ['HTML', 'CSS', 'Bootstrap 5', 'UI/UX'],
      github: 'https://github.com/skwebs/portal-theme-bs5',
      demo: '#'
    },
    {
      title: 'bs5-float-label-form',
      description: 'Implementation of floating label forms using Bootstrap 5, providing a clean and modern user interface.',
      tags: ['HTML', 'CSS', 'Bootstrap 5'],
      github: 'https://github.com/skwebs/bs5-float-label-form',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Featured Projects</h2>
          <p className="text-slate-500 max-w-lg">A selection of my recent open-source work and personal projects.</p>
        </div>
        <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-sky-400 font-bold hover:underline">
          View all on GitHub <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-slate-900 rounded-[2rem] p-8 border border-white/5 hover:border-sky-500/30 transition-all flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-sky-500/10 p-4 rounded-2xl text-sky-400">
                <Code size={32} />
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] uppercase tracking-widest font-black bg-slate-950 px-3 py-1 rounded-full text-slate-500 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center md:hidden">
        <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 py-4 px-8 rounded-2xl font-bold">
          More on GitHub <Github size={20} />
        </a>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';
export default Projects;

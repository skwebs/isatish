"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowUpRight } from 'lucide-react';

const Projects = () => {
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

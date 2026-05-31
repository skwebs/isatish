"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Smartphone, Database, Layout, Hexagon } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'CodeIgniter']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['React Native', 'Expo', 'Android Development']
    },
    {
      title: 'Data & Cloud',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gradient"
          >
            Technical Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 max-w-xl mx-auto"
          >
            Combining modern tools with foundational principles to build reliable software.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start hover:bg-slate-900/60"
            >
              <div className="bg-sky-500/10 w-14 h-14 rounded-2xl flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-500 shrink-0">
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-bold text-slate-400 bg-white/5 border border-white/5 px-4 py-2 rounded-xl group-hover:text-white group-hover:border-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

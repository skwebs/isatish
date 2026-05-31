"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Learning', value: '5+' },
    { label: 'Projects Done', value: '20+' },
    { label: 'Students Taught', value: '100+' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-gradient">
              Code & <br /> Context.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a self-taught Full-Stack Developer with a unique academic background. 
                Holding an <span className="text-white font-semibold underline decoration-sky-500/50 underline-offset-4">M.Com</span> and <span className="text-white font-semibold underline decoration-sky-500/50 underline-offset-4">PGDCA</span>, I bridge the gap between business logic and technical implementation.
              </p>
              <p>
                Currently based in India, I wear multiple hats as a developer and a Computer Teacher. 
                I believe that <span className="text-sky-400 italic font-medium">&quot;teaching strengthens my fundamentals; coding sharpens my skills.&quot;</span>
              </p>
              <p>
                My journey is driven by a passion for real-world problem solving. 
                From building complex Laravel architectures to crafting intuitive React Native experiences, I strive for excellence in every pixel and line of code.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 rounded-[3rem] rotate-3 blur-2xl" />
            <div className="relative h-full w-full bg-slate-900/50 border border-white/10 rounded-[3rem] flex items-center justify-center backdrop-blur-3xl overflow-hidden group">
              <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 opacity-30 group-hover:opacity-50 transition-opacity duration-700" xmlns="http://www.w3.org/2000/svg">
                <path fill="#38bdf8" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.1,-0.1C83.1,15.5,75.7,31,65.4,43.3C55,55.7,41.7,64.9,27.3,71.2C12.9,77.5,-2.6,80.8,-17.1,77.6C-31.7,74.5,-45.3,64.8,-56.3,52.8C-67.3,40.8,-75.8,26.5,-80.1,10.9C-84.4,-4.7,-84.6,-21.6,-78.3,-36.2C-72,-50.8,-59.2,-63.1,-44.6,-69.9C-30,-76.7,-15,-78,0.4,-78.6C15.7,-79.3,31.3,-79.4,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-bold text-xl uppercase tracking-widest">Based in India</p>
                <p className="text-slate-400 font-medium">IST (GMT +5:30)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

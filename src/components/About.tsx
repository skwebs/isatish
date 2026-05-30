import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 w-20 h-2 bg-sky-500 rounded-full" />
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a self-taught Full-Stack Developer with a unique academic background. 
              Holding an <strong className="text-white">M.Com</strong> and <strong className="text-white">PGDCA</strong>, I bridge the gap between business logic and technical implementation.
            </p>
            <p>
              Currently based in India, I wear multiple hats as a Full-Stack & Mobile App Developer and a Computer Teacher. 
              I believe that <span className="italic">"teaching strengthens my fundamentals; coding sharpens my skills."</span>
            </p>
            <p>
              My journey in tech is driven by a passion for real-world problem solving. 
              Whether it's building a complex web architecture with Laravel or crafting intuitive mobile experiences with React Native, I strive for excellence in every line of code.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-3xl font-black text-sky-400">5+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years Learning</p>
            </div>
            <div>
              <p className="text-3xl font-black text-sky-400">20+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-black text-sky-400">100+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Students Taught</p>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-sky-500 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20" />
          <div className="relative aspect-square bg-slate-900 border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-40 animate-pulse" xmlns="http://www.w3.org/2000/svg">
              <path fill="#38bdf8" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.1,-0.1C83.1,15.5,75.7,31,65.4,43.3C55,55.7,41.7,64.9,27.3,71.2C12.9,77.5,-2.6,80.8,-17.1,77.6C-31.7,74.5,-45.3,64.8,-56.3,52.8C-67.3,40.8,-75.8,26.5,-80.1,10.9C-84.4,-4.7,-84.6,-21.6,-78.3,-36.2C-72,-50.8,-59.2,-63.1,-44.6,-69.9C-30,-76.7,-15,-78,0.4,-78.6C15.7,-79.3,31.3,-79.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

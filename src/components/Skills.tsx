import React from 'react';
import { Server, Smartphone, Database, Layout } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-sky-400 w-8 h-8" />,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend',
      icon: <Server className="text-sky-400 w-8 h-8" />,
      skills: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'CodeIgniter']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-sky-400 w-8 h-8" />,
      skills: ['React Native', 'Expo', 'Android Development']
    },
    {
      title: 'Database & Tools',
      icon: <Database className="text-sky-400 w-8 h-8" />,
      skills: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-slate-950 p-8 rounded-3xl border border-white/5 hover:border-sky-500/30 transition-all group">
              <div className="mb-6 bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-sm bg-white/5 py-1.5 px-3 rounded-lg text-slate-400 border border-white/5">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

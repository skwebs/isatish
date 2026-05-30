import { Server, Smartphone, Database, Layout } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="skill-icon" />,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend',
      icon: <Server className="skill-icon" />,
      skills: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'CodeIgniter']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="skill-icon" />,
      skills: ['React Native', 'Expo', 'Android Development']
    },
    {
      title: 'Database & Tools',
      icon: <Database className="skill-icon" />,
      skills: ['MySQL', 'PostgreSQL', 'Git & GitHub', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

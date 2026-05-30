import { Github, ExternalLink, Code } from 'lucide-react';
import '../styles/Projects.css';

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
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <Code size={40} className="project-icon" />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-cta">
        <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="btn btn-outline">
          See More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;

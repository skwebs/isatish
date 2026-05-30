import { Github } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h1 className="hero-name">Satish Kumar Sharma</h1>
        <h2 className="hero-title">Full-Stack & Mobile App Developer</h2>
        <p className="hero-description">
          Self-taught developer passionate about building scalable web and mobile applications. 
          Specialist in <span>React, Next.js, and Laravel</span> with a focus on solving real-world problems.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://github.com/skwebs" target="_blank" rel="noreferrer" className="btn btn-outline">
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

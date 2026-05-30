import React from 'react';
import { Github, Twitter, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">isatish<span>.in</span></a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <div className="social-icons">
            <a href="https://github.com/skwebs" target="_blank" rel="noreferrer"><Github size={20} /></a>
            <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
          </div>
        </div>

        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

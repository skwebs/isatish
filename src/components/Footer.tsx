import { Github, Twitter, Mail, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">isatish<span>.in</span></a>
            <p>Building digital experiences with passion and precision.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-grid">
              <a href="https://github.com/skwebs" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="https://twitter.com/_SatishSharma" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
              <a href="mailto:contact@isatish.in"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Satish Kumar Sharma. All rights reserved.</p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

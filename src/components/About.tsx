import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a self-taught Full-Stack Developer with a unique academic background. 
            Holding an <strong>M.Com</strong> and <strong>PGDCA</strong>, I bridge the gap between business logic and technical implementation.
          </p>
          <p>
            Currently based in India, I wear multiple hats as a Full-Stack & Mobile App Developer and a Computer Teacher. 
            I believe that teaching strengthens my fundamentals, while coding sharpens my skills.
          </p>
          <p>
            My journey in tech is driven by a passion for real-world problem solving and continuous learning. 
            Whether it's building a complex web architecture with Laravel or crafting intuitive mobile experiences with React Native, I strive for excellence in every line of code.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat">
              <span className="stat-value">20+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat">
              <span className="stat-value">100+</span>
              <span className="stat-label">Students Taught</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            {/* Using a stylized SVG or shape as a placeholder as per mandate */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#38bdf8" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.1,-0.1C83.1,15.5,75.7,31,65.4,43.3C55,55.7,41.7,64.9,27.3,71.2C12.9,77.5,-2.6,80.8,-17.1,77.6C-31.7,74.5,-45.3,64.8,-56.3,52.8C-67.3,40.8,-75.8,26.5,-80.1,10.9C-84.4,-4.7,-84.6,-21.6,-78.3,-36.2C-72,-50.8,-59.2,-63.1,-44.6,-69.9C-30,-76.7,-15,-78,0.4,-78.6C15.7,-79.3,31.3,-79.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

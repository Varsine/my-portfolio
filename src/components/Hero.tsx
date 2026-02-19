import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
          <div className="hero-label">
            <span className="status-dot"></span>
            Available for work
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Varsine</span>
          </h1>
          <h2 className="hero-subtitle">Frontend React.js/Next.js Developer</h2>
          <p className="hero-description">
            I'm a highly skilled frontend developer with <strong>5+ years of experience</strong> 
            in React.js, Next.js, and modern UI technologies.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="hero-stats">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '8+', label: 'Projects Completed' },
              { number: '15+', label: 'Technologies' },
            ].map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">App.tsx</div>
            </div>
            <div className="window-content">
              <pre>
                <code>{`import React from 'react';

const Developer: React.FC = () => (
  <div className="developer">
    <h1>Varsine</h1>
    <p>Frontend Expert</p>
    <span>Building amazing experiences</span>
  </div>
);

export default Developer;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;

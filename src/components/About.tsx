import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="lead">
              With over 5 years of experience in frontend development, I specialize in building scalable, performant, and user-friendly web applications.
            </p>
            <p>
              Expertise: <strong>React.js</strong>, <strong>Next.js</strong>, TypeScript, Redux, GraphQL. Passionate about clean code, modern UI, and performance.
            </p>
            <p>
              Delivered projects from e-commerce to LMS platforms focusing on optimization, accessibility, and pixel-perfect implementation.
            </p>

            <div className="about-highlights">
              {[
                'Performance-focused development',
                'Clean & maintainable code',
                'Modern UI/UX implementation',
                'Responsive & accessible design',
              ].map((item) => (
                <div className="highlight-item" key={item}>
                  <i className="fas fa-check-circle"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image" data-aos="fade-left">
            <div className="image-frame">
              <div className="frame-decoration"></div>
              <div className="tech-floating">
                {['react', 'js', 'css3'].map((tech, i) => (
                  <div className="tech-badge" style={{ animationDelay: `${i * 0.5}s` }} key={tech}>
                    <i className={`fab fa-${tech}`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-logo">Varsine<span>.</span></h3>
            <p>Frontend React.js/Next.js Developer passionate about building exceptional web experiences.</p>
            <div className="social-links">
              <a href="https://github.com/Varsine" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/varsine" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:varspoghosyan93@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
                <li key={link}><a href={`#${link}`}>{link}</a></li>
              ))}
            </ul>   
            </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Varsine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
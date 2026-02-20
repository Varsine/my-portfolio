import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return; 

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-description">
            I'm currently available for freelance work and exciting opportunities
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <h3>Email Me</h3>
              <p>Feel free to drop me an email.</p>
              <a href="mailto:varspoghosyan93@gmail.com" className="contact-link">varspoghosyan93@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
              <h3>Connect on LinkedIn</h3>
              <p>Let's connect professionally.</p>
              <a href="https://www.linkedin.com/in/varsine" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/varsine</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fab fa-github"></i></div>
              <h3>GitHub Profile</h3>
              <p>Check out my open source contributions.</p>
              <a href="https://github.com/Varsine" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Varsine</a>
            </div>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required></textarea>
              </div>

              {status && (
                <div
                  className={`form-status ${status.type === 'success' ? 'status-success' : 'status-error'}`}
                >
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

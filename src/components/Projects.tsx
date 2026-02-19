import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projectsList';

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-description">A showcase of my recent work and accomplishments</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project as any} delay={100 + idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

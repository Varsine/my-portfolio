import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../utils/skills';


const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-description">
            Technologies and tools I work with to build exceptional web applications
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillCard key={skill.title} title={skill.title} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

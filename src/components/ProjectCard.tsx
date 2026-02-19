import React, { JSX } from 'react';
import Slider from "react-slick";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        images?: string[];
        tags?: string[];
        link?: string;
        live?: string;
        icon?: JSX.Element;
        features?: string[];
    };
    delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {

    const sliderSettings = {
        width: "100%",
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
    };

    const CardWrapper = project.live ? "a" : "div";

    return (
        // <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
        <CardWrapper
            {...(project.live && {
                href: project.live,
                target: "_blank",
                rel: "noopener noreferrer",
            })}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="project-image">
                <div className="project-overlay">
                    <div className="project-links">
                        {project.live ? (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                <i className="fas fa-external-link-alt"></i>
                                <span>Live Demo</span>
                            </a>
                        ) : (
                            <span className="project-link disabled">
                                <i className="fas fa-lock"></i>
                                <span>Private</span>
                            </span>
                        )}
                    </div>
                </div>
                <div className="project-placeholder">
                    {project.images && project.images.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {project.images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`${project.title}-${index}`}
                                        className="project-img"
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <i className="fas fa-box"></i>
                    )}
                </div>      </div>
            <div className="project-content">
                <div className="project-tags">
                    {(project.tags || []).map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                    {(project.features || []).map((feat) => (
                        <li key={feat}><i className="fas fa-check"></i> {feat}</li>
                    ))}
                </ul>
            </div>
        </CardWrapper>
    );
};

export default ProjectCard;

import React, { useState, useRef, ReactElement } from 'react';
import Slider from "react-slick";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        images?: string[];
        tags?: string[];
        link?: string;
        live?: string;
        icon?: ReactElement;
        features?: string[];
    };
    delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X in card
        const y = e.clientY - rect.top;  // mouse Y in card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateLimit = 10; // degrees

        // calculate rotation
        const rotY = ((x - centerX) / centerX) * rotateLimit;
        const rotX = ((centerY - y) / centerY) * rotateLimit;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

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
        <CardWrapper
            {...(project.live && {
                href: project.live,
                target: "_blank",
                rel: "noopener noreferrer",
            })}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={delay}
            ref={cardRef as any}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.2s ease-out',
            }}
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
                </div>
            </div>
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

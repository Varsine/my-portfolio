import React, { useEffect, useRef, useState } from "react";

interface SkillCardProps {
  title: string;
  percentage: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  percentage,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<string>("0%");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(percentage), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [percentage]);

  return (
    <div className="skill-card" ref={ref}>
      <h3>{title}</h3>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default SkillCard;

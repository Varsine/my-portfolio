import React, { useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && ref.current) {
          const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
              ref.current!.textContent = target + suffix;
              clearInterval(timer);
            } else {
              ref.current!.textContent =
                Math.floor(start) + suffix;
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
  }, [target, suffix]);

  return (
    <div ref={ref} className="stat-number">
      0{suffix}
    </div>
  );
};

export default Counter;

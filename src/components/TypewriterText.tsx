import React, { useEffect, useRef } from "react";
import { animate } from "@motionone/dom";

const TypewriterTitle = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const text = "Frontend React.js/Next.js Developer";

  useEffect(() => {
    const heading = containerRef.current;
    if (!heading) return;

    // Clear heading
    heading.innerHTML = "";

    // Create span for each character
    const spans = text.split("").map((char) => {
      const span = document.createElement("span");
      if (char === " ") {
        span.textContent = "\u00A0";
        span.style.display = "inline";
      } else {
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
      }
      heading.appendChild(span);
      return span;
    });

    // Create blinking cursor
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.display = "inline-block";
    cursor.style.marginLeft = "2px";
    heading.appendChild(cursor);

    animate(
      cursor,
      { opacity: [1, 0, 1] },
      { repeat: Infinity, duration: 1 }
    );

    // Function to type and delete
    const typeDeleteLoop = async () => {
      while (true) {
        // TYPE
        for (let i = 0; i < spans.length; i++) {
          if (spans[i].textContent !== "\u00A0") {
            await animate(
              spans[i],
              { opacity: [0, 1], transform: ["translateY(0.25em)", "translateY(0em)"] },
              { duration: 0.05 }
            ).finished;
          }
        }
        // Wait a bit at full text
        await new Promise((r) => setTimeout(r, 1000));

        // DELETE
        for (let i = spans.length - 1; i >= 0; i--) {
          if (spans[i].textContent !== "\u00A0") {
            await animate(
              spans[i],
              { opacity: [1, 0], transform: ["translateY(0em)", "translateY(0.25em)"] },
              { duration: 0.05 }
            ).finished;
          }
        }
        // Wait a bit before next loop
        await new Promise((r) => setTimeout(r, 500));
      }
    };

    typeDeleteLoop();
  }, []);

  return (
    <h2 ref={containerRef} className="hero-subtitle" aria-label={text}>
      {text}
    </h2>
  );
};

export default TypewriterTitle;

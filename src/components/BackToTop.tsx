import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      ↑
    </button>
  );
};

export default BackToTop;

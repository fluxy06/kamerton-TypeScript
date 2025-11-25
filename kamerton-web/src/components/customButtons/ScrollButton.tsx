import React from "react";
import { useSmoothScroll } from "@hooks/smoothScroll";
import "./ScrollButton.css";

interface ScrollButtonProps {
  label: string;
  targetId: string;
  offset?: number; 
  centered?: boolean; 
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ label, targetId, offset = 0, centered = false }) => {
  const { scrollTo } = useSmoothScroll();

  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    let scrollTarget: number;

    if (centered) {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      scrollTarget = elementTop - windowHeight / 2 + element.offsetHeight / 2;
    } else {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      scrollTarget = elementTop - offset;
    }

    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-button">
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default ScrollButton;

import React from "preact/compat";
import "./ScrollButton.css";

interface ScrollButtonProps {
  label: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({label}) => {
  return (
    <div className="scroll-button">
            <button>{label}</button>
    </div>
  );
}

export default ScrollButton;
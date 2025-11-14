import * as React from "react";
import "./card.css";

interface CardProps {
    img: string;
    label: string;
    labelText: string;
}

const Card: React.FC<CardProps> = ({ img, label, labelText }) => {
  return (
    <div className="card-component">
       <button className="card-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(-45deg)' }}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#202020" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </button>
  <img src={img} alt={label} />
      <h1>{label}</h1>
      <p>{labelText}</p>
    </div>
  );
}

export default Card;
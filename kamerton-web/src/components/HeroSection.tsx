import * as React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
            <div className="hero-content-left">
                  <div className="hero-content-left-big"></div>
                  <div className="hero-content-left-small"></div>
                  <div className="hero-content-left-small"></div>
            </div>
            <div className="hero-content-right">
                  <div className="LogoImage"></div>
            </div>
    </div>
  );
}

export default HeroSection;
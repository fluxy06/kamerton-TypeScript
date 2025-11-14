import * as React from "react";
import "./HeroSection.css";
import CityImg from '@img/city-img.svg'

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
            <div className="hero-content-left">
                  <div className="hero-content-left-big">
                      <h1>Самая эффективная реклама в Богородске </h1>
                      <p>Ваш бизнес увидят даже те, кого не берут обычные таргетированные объявления. Максимальный охват новой аудитории.</p>
                      <button>связаться</button>
                  </div>
                  <div className="hero-content-left-small"></div>
                  <div className="hero-content-left-small"></div>
            </div>
            <div className="hero-content-right">
                  <img src={CityImg} alt="Banner" className="LogoImage"/>
            </div>
    </div>
  );
}

export default HeroSection;
import * as React from "react";
import "./HeroSection.css";
import HeroMiniImg from "@img/hero-mini.svg";
import GraphImg from "@img/graph.svg";

const HeroSection: React.FC = () => {
  return (
     <div className="hero-section">
            <div className="hero-left-big">
              <div className="hero-left-big-small">
                      <h1>Самая эффективная реклама в Богородске </h1>
                         <p>Ваш бизнес увидят даже те, кого не берут обычные таргетированные объявления.
                          Максимальный охват новой аудитории.</p>
                          <button>связаться</button>
              </div>
            </div>
            <div className="hero-left-small-one">
                  <div className="text-small-one">
                        <h1>5</h1>
                        <p>лучших<br/>расположений</p>
                  </div>
                  <div className="img-small-one">
                      <img src={HeroMiniImg} alt="@media" />
                      <img src={HeroMiniImg} alt="@media" />
                      <img src={HeroMiniImg} alt="@media" />
                      <img src={HeroMiniImg} alt="@media" />
                      <div className="next-page">
                        <svg 
                          width="30" 
                          height="30" 
                          viewBox="0 0 24 24" 
                          fill="none"
                          stroke="currentColor" 
                          stroke-width="2.2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"
                        >
                          <path d="M4 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                  </div>
            </div>
            <div className="hero-left-small-two">
                  <div className="text-small-one">
                        <h1>80%</h1>
                        <p>скорость<br/>охвата</p>
                  </div>
                  <div className="img-small-one-two">
                        <img src={GraphImg} alt="@media" />
                  </div>
            </div>
            <div className="hero-right-big">
            </div>
     </div>
  );
};

export default HeroSection;

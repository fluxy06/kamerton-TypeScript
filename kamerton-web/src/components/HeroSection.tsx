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
                  <div className="text-small-one">123</div>
                  <div className="img-small-one">img</div>
            </div>
            <div className="hero-left-small-two">
                  <div className="text-small-one">123</div>
                  <div className="img-small-one">img</div>
            </div>
            <div className="hero-right-big">
            </div>
     </div>
  );
};

export default HeroSection;

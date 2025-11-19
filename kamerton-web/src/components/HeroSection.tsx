import * as React from "react";
import "./HeroSection.css";
import HeroMiniImg from "@img/hero-mini.svg";
import HeroMiniImgTwo from "@img/hero-mini-two.svg"
import HeroMiniImgThree from "@img/hero-mini-three.svg"
import GraphImg from "@img/graph.svg";
import { useModalWithAnimation } from "@hooks/useModal"; 
import FormContact from "@components/formContact";
import { Link } from "react-router-dom"; 

const HeroSection: React.FC = () => {
   const { openModal, Modal } = useModalWithAnimation({ children: <FormContact /> });
  return (
     <div className="hero-section">
            <div className="hero-content-left">
                  <div className="hero-content-left-big">
                          <h1>Самая эффективная реклама в Богородске </h1>
                          <p>Ваш бизнес увидят даже те, кого не берут обычные таргетированные объявления.
                              Максимальный охват новой аудитории.</p>
                            <button onClick={openModal}>связаться</button>
                  </div>
                  <div className="hero-content-left-small">
                        <div className="graph-text-hero">
                              <h1>30%</h1>
                              <p>увеличение<br/>продаж</p>
                        </div>

                        <div className="next-page">
                              <img src={HeroMiniImgThree} alt="" />
                              <img src={HeroMiniImgTwo} alt="" />
                              <img src={HeroMiniImg} alt="" />
                              <img src={HeroMiniImgThree} alt="" />
                              <Link to="/catalog"><div className="next-page-img">Далее</div></Link>
                        </div>
                  </div>
                  <div className="hero-content-left-small-catalog">
                        <div className="graph-text-hero">
                              <h1>80%</h1>
                              <p>скорость<br/>охвата</p>
                        </div>
                        <img src={GraphImg} alt="" id="welcome-section"/>
                  </div>
            </div>
            <div className="hero-content-right">
            </div>
            {Modal}
    </div>
  );
};

export default HeroSection;

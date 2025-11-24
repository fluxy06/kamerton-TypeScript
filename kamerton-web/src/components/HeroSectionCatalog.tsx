import * as React from "react";
import "./HeroSectionCatalog.css";
import GraphImg from "@img/graph.svg";
import { useModalWithAnimation } from "@hooks/useModal";
import FormContact from "@components/formContact";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; 

const HeroSectionCatalog: React.FC = () => {
  const location = useLocation();
  const { imgID, label, helpLabel } = (location.state || {}) as {
    imgID?: string;
    label?: string;
    helpLabel?: string;
  };

  const { openModal, Modal } = useModalWithAnimation({
    children: <FormContact />,
  });

  return (
    <div className="hero-section-catalog">
      <div className="hero-content-left-catalog">
        <div className="hero-content-left-big-catalog">
          <h1>{label}</h1>
          <p>{helpLabel}</p>
          <button onClick={openModal}>связаться</button>
        </div>

        <div className="hero-content-left-small-catalog">
          <div className="graph-text">
            <h1>30%</h1>
            <p>увеличение<br/>продаж</p>
          </div>
          <img src={GraphImg} alt="" />
        </div>

        <div className="hero-content-left-small-catalog">
          <div className="graph-text">
            <h1>85%</h1>
            <p>смотрят<br/>вашу рекламу</p>
          </div>
          <img src={GraphImg} alt="" />
        </div>
      </div>

      <div className="hero-content-right-catalog">
        {imgID && <div className={imgID}></div>}
      </div>

      {Modal}
    </div>
  );
};

export default HeroSectionCatalog;

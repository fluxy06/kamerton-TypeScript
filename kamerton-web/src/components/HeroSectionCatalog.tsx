import * as React from "react";
import "./HeroSectionCatalog.css";
import GraphImg from '@img/graph.svg'

const HeroSectionCatalog: React.FC = () => {
  return (
    <div className="hero-section-catalog">
            <div className="hero-content-left-catalog">
                  <div className="hero-content-left-big-catalog">
                          <h1>Сити-щиты: реклама, которая работает 24/7</h1>
                          <p>Это современные рекламные конструкции, расположенные
                            на остановках общественного транспорта. 
                            Они эффективно охватывают пешеходов, пассажиров и водителей, 
                            донося ваше сообщение до самой активной аудитории города.</p>
                            <button>связаться</button>
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
                  <div className="LogoImage"></div>
            </div>
    </div>
  );
}

export default HeroSectionCatalog;
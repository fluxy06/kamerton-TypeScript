import React from "preact/compat";
import './info.css'
import ScrollButton from "./ScrollButton";

const Info: React.FC = ({}) => {
  return (
    <div className="info">
      <ScrollButton label="контакты"/>
      <p>Готовы начать работу? Свяжитесь с нами удобным для вас способом.</p>
      <div className="info-block">
            <div className="adres mini-info">

            </div>
            <div className="phone-number mini-info">

            </div>
            <div className="email mini-info">

            </div>
            <div className="grafic mini-info">

            </div>
            <div className="map">
                
            </div>
      </div>
    </div>
  );
}

export default Info;
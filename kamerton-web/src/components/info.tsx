import * as React from "react";
import './info.css'
import ScrollButton from "@components/ScrollButton";

const Info: React.FC = ({}) => {
  return (
    <div className="info">
      <ScrollButton label="контакты" targetId="info-block" centered/>
      <p>Готовы начать работу? Свяжитесь с нами удобным для вас способом.</p>
      <div className="info-block" id="info-block">
            <div className="adres mini-info">
                    <h1 className="text-mini-info-h1">📍</h1>
                    <h2 className="text-mini-info-h2">Адрес</h2>
                    <p className="text-mini-info-h3">ул. Ленина, 180,<br/>г. Богородск, 607600</p>
            </div>
            <div className="phone-number mini-info">
                  <h1 className="text-mini-info-h1">📞</h1>
                    <h2 className="text-mini-info-h2">Телефон</h2>
                    <p className="text-mini-info-h3">+7 (987) 540-15-15<br/>+7 (123) 456-78-90</p>
            </div>
            <div className="email mini-info">
                  <h1 className="text-mini-info-h1">✉️</h1>
                    <h2 className="text-mini-info-h2">Адрес</h2>
                    <p className="text-mini-info-h3">info@kamerton.ru<br/>kamertonbg@gmail.com</p>
            </div>
            <div className="grafic mini-info">
                    <h1 className="text-mini-info-h1">🕒</h1>
                    <h2 className="text-mini-info-h2">Режим работы</h2>
                    <p className="text-mini-info-h3">Пн-Пт: 10:00 - 20:00<br/>Сб-Вс: 10:00 - 20:00</p>
            </div>
            <div className="map">
                
            </div>
      </div>
    </div>
  );
}

export default Info;
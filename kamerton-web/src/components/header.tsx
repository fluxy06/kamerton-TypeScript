import React from "preact/compat";
import "./header.css";

const Header: React .FC = () => {
  return (
    <div className="header-wrapper">
        <header className="header">
          <h1>Камертон</h1>
          <div className="header-right-section">
              <div className="header-links">
                <a href="#">о нас</a>
                <a href="/catalog">услуги</a>
                <a href="/">контакты</a>
              </div>
              <div className="header-button-container">
                  <button className="header-button">связаться</button>
              </div>
          </div>
      </header>
    </div>
  );
}


export default Header;
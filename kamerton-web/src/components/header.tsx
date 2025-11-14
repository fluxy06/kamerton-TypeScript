import * as React from "react";
import "./header.css";
import { Link } from "react-router-dom"; // импорт Link

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <h1>Камертон</h1>
        <div className="header-right-section">
          <div className="header-links">
            <Link to="/">о нас</Link>
            <Link to="/catalog">услуги</Link>
            <Link to="/">контакты</Link>
          </div>
          <div className="header-button-container">
            <button className="header-button">связаться</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

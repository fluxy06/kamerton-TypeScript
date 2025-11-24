import * as React from "react";
import "./header.css";
import { Link } from "react-router-dom"; 
import { useModalWithAnimation } from "@hooks/useModal"; 
import FormContact from "@components/formContact";
import { useSmoothScroll } from "@hooks/smoothScroll";

const Header: React.FC = () => {
  const { openModal, Modal } = useModalWithAnimation({ children: <FormContact /> });
   const { scrollTo } = useSmoothScroll();

   const handleScrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("footer-section"); 
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <h1>Камертон</h1>
        <div className="header-right-section">
          <div className="header-links">
            <Link to="/" 
             state={{
                    imgID: "banners", 
                    label: "Заметные баннеры для максимального привлечения клиентов.",
                    helpLabel: "Это рекламные полотна любых размеров " +
                    "и форматов, предназначенные для размещения на улице "+
                    "и в помещениях. Они эффективно решают широкий спектр "+
                    "рекламных задач, от презентации бренда до информирования о мероприятиях."
                    }}
            >о нас</Link>
            <Link to="/catalog"
             state={{
                    imgID: "banners", 
                    label: "Заметные баннеры для максимального привлечения клиентов.",
                    helpLabel: "Это рекламные полотна любых размеров " +
                    "и форматов, предназначенные для размещения на улице "+
                    "и в помещениях. Они эффективно решают широкий спектр "+
                    "рекламных задач, от презентации бренда до информирования о мероприятиях."
                    }}
            >услуги</Link>
            <a href="#footer" onClick={handleScrollToFooter} >контакты</a>
          </div>
          <div className="header-button-container">
            <button className="header-button" onClick={openModal}>
              связаться
            </button>
          </div>
        </div>
      </header>
      {Modal}
    </div>
  );
};

export default Header;

import * as React from "react";
import './footer.css'
import tg from '@img/tg.svg'
import vk from '@img/vk.svg'
import { useLocation } from "react-router-dom";
import {usePageScroll} from '@hooks/useLocation'
import { Link } from "react-router-dom"; 

const Footer:React .FC = () => {
    const { handleScrollToBlock } = usePageScroll();
    return (
        <div className="footer">
            <div className="footer-up-blocks">
                <div className="footer-text">
                        <h1>Камертон</h1>
                        <p>Мы создаем рекламу, которая работает. ваш<br/>
                            растущий успех — наша лучшая рекомендация.</p>
                            <div>
                                <a href="#"><img src={tg} alt="ТГ" /></a>
                                <a href="#"><img src={vk} alt="ВК" /></a>
                            </div>
                </div>
                <div className="footer-navigation" id="footer-section">
                        <h2>Навигация по сайту</h2>
                        <div className="footer-navigation-links">
                                <Link to="/">Главная</Link>
                                <a href="#services" onClick={handleScrollToBlock("services", "tutorial-contact")} >Услуги</a>
                                <a href="#about" onClick={handleScrollToBlock("welcome-section", "tutorials")}>О нас</a>
                                <a href="#footer" onClick={handleScrollToBlock("footer-section", "footer-section")}>Контакты</a>
                        </div>
                </div>
                <div className="footer-contacts">
                    <h2>Наши контакты</h2>
                    <p>T: 8 (930) 803-33-10</p>
                    <p>T: +7(986) 750-62-00</p>
                    <p>ул. Ленина, 180,<br/>г. Богородск, 607600</p>
                </div>
            </div>
            <div className="footer-bottom-blocks">
                        <a href="#">Политика конфиденциональности</a>
                        <a href="#">Договор оферты</a>
                        <a href="#">Разработка сайта - GoStack</a>
            </div>
        </div>
    )
}

export default Footer
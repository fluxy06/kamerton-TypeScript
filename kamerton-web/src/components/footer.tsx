import React from "preact/compat";
import './footer.css'

const Footer:React .FC = () => {
    return (
        <div className="footer">
            <div className="footer-up-blocks">
                <div className="footer-text">
                        <h1>Камертон</h1>
                        <p>Мы создаем рекламу, которая работает. ваш<br/>
                            растущий успех — наша лучшая рекомендация.</p>
                            <div>
                                <a href="#"><img src="#" alt="ТГ" /></a>
                                <a href="#"><img src="#" alt="ВК" /></a>
                            </div>
                </div>
                <div className="footer-navigation">
                        <h2>Навигация по сайту</h2>
                        <div className="footer-navigation-links">
                                <a href="#">Главная</a>
                                <a href="#">Услуги</a>
                                <a href="#">О нас</a>
                                <a href="#">Контакты</a>
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
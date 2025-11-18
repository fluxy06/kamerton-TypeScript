import React from "react";
import './formContact.css'


const FormContact:React.FC = () => {
    return(
        <div className="form-contact">
                        <h1>Связаться с нами</h1>
                        <p>Для связи с нами оставьте заявку</p>
                        <div className="input-section">
                                <p>Имя</p>
                                <input type="text" className="nameField" placeholder="Иван" />
                                <p>Телефон</p>
                                <input type="text" className="numberField" placeholder="+7(999) 999 99-99" />
                                <p>E-mail</p>
                                <input type="text" className="emailField" placeholder="your@email.ru" />
                                <p>Сообщение</p>
                                <textarea className="messageField" placeholder="Расскажите о вашем проекте"></textarea>
                        </div>
                        <button className="sumbitForm">Оставить заявку</button>
        </div>
    )
}

export default FormContact
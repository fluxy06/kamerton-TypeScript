import React, { useState } from "react";
import './formContact.css'
import { useContactForm } from '@/hooks/useContactForm'
import AlertPopup from './../../modal/AlertProp'


const FormContact:React.FC = () => {
    const { values, errors, handleChange, handleSubmit } = useContactForm();
     const [showAlert, setShowAlert] = useState(false);

    const handleSend = () => {
        const ok = handleSubmit(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        });
    };
    return(
        <div className="form-contact">
                        <h1>Связаться с нами</h1>
                        <p>Для связи с нами оставьте заявку</p>
                        <div className="input-section">
                                <p>Имя</p>
                                <input
                                        type="text"
                                        className="nameField"
                                        placeholder="Иван"
                                        maxLength={30}
                                        value={values.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                                <p>Телефон</p>
                                <input 
                                        type="text" 
                                        className="numberField"
                                        placeholder="+7(999) 999-99-99" 
                                        maxLength={20}
                                        value={values.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                 />
                                 {errors.phone && <span className="error">{errors.phone}</span>}
                                <p>E-mail</p>
                                <input 
                                        type="text" 
                                        className="emailField" 
                                        placeholder="your@email.ru" 
                                        maxLength={50}
                                        value={values.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                />
                                 {errors.email && <span className="error">{errors.email}</span>}
                                <p>Сообщение</p>
                                <textarea 
                                        className="messageField" 
                                        placeholder="Расскажите о вашем проекте" 
                                        maxLength={300}
                                        value={values.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                ></textarea>
                                 {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <button className="sumbitForm" 
                                onClick={handleSend}
                        >Оставить заявку</button>
                         <AlertPopup
        show={showAlert}
        message="Форма успешно отправлена!"
        onClose={() => setShowAlert(false)}
      />
        </div>
        
    )
}

export default FormContact
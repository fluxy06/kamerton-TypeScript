import * as React from "react";
import "./welcome.css"
import ScrollButton from "@/components/customButtons/ScrollButton";
import { useModalWithAnimation } from "@hooks/useModal"; 
import FormContact from "@components/forms/formContact";


export const Welcome: React.FC = () => {
    const { openModal, Modal } = useModalWithAnimation({ children: <FormContact /> });
    return (
        <div className="welcome-section">
            <div className="left-welcome">
                <ScrollButton label="о нас" targetId="welcome-section" centered/>
             <h1>Давайте<br/>знакомиться!</h1>
            </div>
            <div className="right-welcome">
                <p>Мы — команда профессионалов из Богородска,<br/>
                    которая знает и любит свое дело. Наша цель —<br/>
                    предлагать решения, которые действительно<br/>
                    работают и приносят ощутимый результат нашим<br/>
                    клиентам. Мы ценим ваше доверие и строим<br/>
                    долгосрочные партнерские отношения,<br/>
                    основанные на качестве, ответственности и<br/>
                    взаимном уважении.</p>
         <button className="welcome-contact" onClick={openModal} id="services">Связаться</button>
            </div>
            {Modal}
        </div>
    );
}

export default Welcome;
import React from "preact/compat";
import "./welcome.css"
import ScrollButton from "./ScrollButton";

export const Welcome: React.FC = () => {
    return (
        <div className="welcome-section">
            <div className="left-welcome">
                <ScrollButton label="о нас" />
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
         <button className="welcome-contact">Связаться</button>
            </div>
        </div>
    );
}

export default Welcome;
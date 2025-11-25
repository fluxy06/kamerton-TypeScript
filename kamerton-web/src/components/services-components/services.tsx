import * as React from "react";
import "./services.css";
import Card from "@/components/card/card";
import CityImg from '@img/city-img.svg'
import CityImgTwo from '@img/city-banner.svg'
import CityImgThree from '@img/city-img-banner-three.svg'
import ScrollButton from "@/components/customButtons/ScrollButton";
import { Link } from "react-router-dom"; 
import { useScrollToTop } from "@/hooks/scroll-up";

const Services: React.FC = () => {
   const scrollToTop = useScrollToTop();
  return (
    <>
    <div className="services-button-serv">
          <ScrollButton label="услуги" targetId="services-component" centered/>
    </div>
    <div className="services-component" id="services-component">
           <Link to="/catalog"  onClick={scrollToTop}
                  state={{
                    imgID: "city-shield",
                    label: "Сити-щиты: реклама, которая работает 24/7",
                    helpLabel: "Это современные рекламные конструкции, " +
                    "расположенные на остановках общественного транспорта. " +
                    "Они эффективно охватывают пешеходов, пассажиров и водителей, "+
                    "донося ваше сообщение до самой активной аудитории города."

                  }}
           ><Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/></Link> 
            <Link to="/catalog" onClick={scrollToTop}
            state={{
              imgID: "bilbord", 
              label: "Реклама, которую невозможно пропустить, на наших билбордах",
              helpLabel: "Это крупноформатные рекламные конструкции, "+
              "расположенные вдоль оживлённых трасс и магистралей."+
              "Они эффективно охватывают водителей и пассажиров автомобилей, "+
              "донося ваше сообщение до самой мобильной и широкой аудитории города."
            }}
            
            ><Card img={CityImgTwo} label={"Биллборды"} labelText={"размеры: 2x4, 3x6m"}/></Link>
             <Link to="/catalog" onClick={scrollToTop}
              state={{
              imgID: "banners", 
              label: "Заметные баннеры для максимального привлечения клиентов.",
              helpLabel: "Это рекламные полотна любых размеров " +
               "и форматов, предназначенные для размещения на улице "+
               "и в помещениях. Они эффективно решают широкий спектр "+
               "рекламных задач, от презентации бренда до информирования о мероприятиях."
              }}
             ><Card img={CityImgThree} label={"Печать баннеров"} labelText={"размеры: следует уточнить"}/></Link>
    </div>
    </>
  );
}

export default Services;
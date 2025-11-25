import * as React from "react";
import './servicesCatalog.css'
import ScrollButton from "@/components/customButtons/ScrollButton"; 
import Card from "@/components/card/card";
import CityImg from '@img/city-img.svg';
import CityImgTwo from '@img/bilbord.svg'
import { useScrollToTop } from "@/hooks/scroll-up";
import { Link } from "react-router-dom"; 

    const ServicesCatalog:React.FC = () => {
        // Scroll-to-top
        const scrollToTop = useScrollToTop();

        return (
            <div className="services-catalog">
                    <ScrollButton label="услуги" targetId="services-catalog-block-cards" centered/>
                    <div className="services-catalog-block-cards" id="services-catalog-block-cards">
                            <div className="services-catalog-scroll-up">
                                <h1>Вернуться<br/>на вверх</h1>
                                <button onClick={scrollToTop}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </button>
                            </div>
                            <Link to="/catalog" onClick={scrollToTop}
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
                            >
                                        <Card img={CityImgTwo} label={"Биллборды"} labelText={"размеры: 2x4, 3x6m"}/>
                            </Link>
                    </div>
            </div>
        )

    }

    export default ServicesCatalog
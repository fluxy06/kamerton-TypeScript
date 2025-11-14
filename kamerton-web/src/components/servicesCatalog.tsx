import * as React from "react";
import './servicesCatalog.css'
import ScrollButton from "@components/ScrollButton";
import Card from "@components/card";
import CityImg from '@img/city-img.svg';

const ServicesCatalog:React.FC = () => {
    return (
        <div className="services-catalog">
                <ScrollButton label="услуги" />
                <div className="services-catalog-block-cards">
                        <div className="services-catalog-scroll-up">
                            <h1>Вернуться<br/>на вверх</h1>
                            <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>
                        </div>
                        <Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/>
                        <Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/>
                </div>
        </div>
    )

}

export default ServicesCatalog
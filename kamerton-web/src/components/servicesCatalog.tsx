    import * as React from "react";
    import './servicesCatalog.css'
    import ScrollButton from "@components/ScrollButton";
    import Card from "@components/card";
    import CityImg from '@img/city-img.svg';
import { useScrollToTop } from "@/hooks/scroll-up";

    const ServicesCatalog:React.FC = () => {

        // Scroll-to-top
        const scrollToTop = useScrollToTop();

        return (
            <div className="services-catalog">
                    <ScrollButton label="услуги" />
                    <div className="services-catalog-block-cards">
                            <div className="services-catalog-scroll-up">
                                <h1>Вернуться<br/>на вверх</h1>
                                <button onClick={scrollToTop}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
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
import React from "preact/compat";
import "./services.css";
import Card from "./card";
import CityImg from '../assets/img/city-img.svg'
import ScrollButton from "./ScrollButton";

const Services: React.FC = () => {
  return (
    <>
    <div className="services-button-serv">
          <ScrollButton label="услуги"/>
    </div>
    <div className="services-component">
            <Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/>
            <Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/>
            <Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/>
    </div>
    </>
  );
}

export default Services;
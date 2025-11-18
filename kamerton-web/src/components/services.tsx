import * as React from "react";
import "./services.css";
import Card from "@components/card";
import CityImg from '@img/city-img.svg'
import CityImgTwo from '@img/city-banner.svg'
import CityImgThree from '@img/city-img-banner-three.svg'
import ScrollButton from "@components/ScrollButton";
import { Link } from "react-router-dom"; 

const Services: React.FC = () => {
  return (
    <>
    <div className="services-button-serv">
          <ScrollButton label="услуги"/>
    </div>
    <div className="services-component">
           <Link to="/catalog"><Card img={CityImg} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/></Link> 
            <Link to="/catalog"><Card img={CityImgTwo} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/></Link>
             <Link to="/catalog"><Card img={CityImgThree} label={"Сити-щиты"} labelText={"размеры: 1.2x1.8m"}/></Link>
    </div>
    </>
  );
}

export default Services;
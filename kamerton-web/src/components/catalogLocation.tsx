import * as React from "react";
import './catalogLocation.css'
import ScrollButton from "@components/ScrollButton";


const CatalogLocation:React .FC = () => {
    return(
        <div className="catalog-location">
                <ScrollButton label="локации" targetId="catalog-map" centered/>
                <h2>Осталось выбрать только локацию!</h2>
                <div className="catalog-map" id="catalog-map">
                </div>
        </div>
    )
}


export default CatalogLocation
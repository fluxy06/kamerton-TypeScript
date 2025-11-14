import React from "preact/compat";
import './catalogLocation.css'
import ScrollButton from "@components/ScrollButton";


const CatalogLocation:React .FC = () => {
    return(
        <div className="catalog-location">
                <ScrollButton label="локации" />
                <h2>Осталось выбрать только локацию!</h2>
                <div className="catalog-map">
                </div>
        </div>
    )
}


export default CatalogLocation
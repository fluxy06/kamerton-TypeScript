import * as React from "react";
import './catalogLocation.css'
import ScrollButton from "@components/ScrollButton";
import { YMaps,Map, Placemark } from "@pbe/react-yandex-maps";


const CatalogLocation:React .FC = () => {
    const coords: [number, number] = [56.102975, 43.508239];
    return(
        <div className="catalog-location">
                <ScrollButton label="локации" targetId="catalog-map" centered/>
                <h2>Осталось выбрать только локацию!</h2>
                <div className="catalog-map" id="catalog-map">
                    <YMaps>
                       <Map
                            defaultState={{ center: [56.102975, 43.508239], zoom: 17 }}
                            width="100%"
                            height="min(60vh, 500px)"
                            
                        >
                            <Placemark geometry={[56.102975, 43.508239]} />
                    </Map>
                </YMaps>
                </div>
        </div>
    )
}


export default CatalogLocation
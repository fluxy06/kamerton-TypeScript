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
                     <YMaps
                                      query={{
                                        lang: "ru_RU",
                                        apikey: "b0f1770b-e8e5-4bcb-886c-5f42658a2de3",
                                        load: "package.map,package.controls"
                                      }}
                                      version="2.1"
                                    >
                                      <Map
                                        defaultState={{
                                          center: coords,
                                          zoom: 17,
                                          type: "yandex#hybrid" 
                                        }}
                                        style={{ width: "100%", height: "100%" }}
                                      >
                                        <Placemark geometry={coords} />
                                      </Map>
                                    </YMaps>
                </div>
        </div>
    )
}


export default CatalogLocation
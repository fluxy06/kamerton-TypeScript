import * as React from "react";
import './tutorial.css'
import ScrollButton from "@components/ScrollButton";
import { use3dHover } from "@/hooks/use3Deffect";


const TutorialCatalog:React.FC = () => {
    const blocksRef = use3dHover(['tutorial-one', 'tutorial-two', 'tutorial-three']);

    return(
        <div className="tutorial-catalog">
                <div className="tutorial">
                        <ScrollButton label="контакты" />
                        <h2>Сейчас мы все расскажем. Все намного проще чем вам кажется!</h2>
                        <div className="tutorial-blocks">
                                <div className="tutorial-one "  ref={el => { blocksRef.current[0] = el; }}>
                                        <h2>01</h2>
                                        <h3>Выберите локацию</h3>
                                        <p>Укажите на карте нужные остановки или районы города.</p>
                                </div>
                                <div className="tutorial-two" ref={el => { blocksRef.current[1] = el; }}>
                                        <h2>02</h2>
                                        <h3>Предоставьте макет</h3>
                                        <p>Мы поможем с адаптацией дизайна под формат сити-щита.</p>
                                </div>
                                <div className="tutorial-three" ref={el => { blocksRef.current[2] = el; }}>
                                        <h2>03</h2>
                                        <h3>Запускайте рекламу</h3>
                                        <p>Мы производим монтаж, и ваша реклама начинает работать.</p>
                                </div>
                        </div>
                </div>
                <div className="tutorial-catalog-contact">
                        <h1>Уже готовы к запуску?<br/>Свяжитесь с нами</h1>
                        <button>связаться</button>
                </div>
        </div>
    )
}

export default TutorialCatalog
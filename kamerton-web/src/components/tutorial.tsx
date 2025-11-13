import React from "preact/compat";
import './tutorial.css'
import ScrollButton from "./ScrollButton";

const TutorialCatalog:React .FC = () => {
    return(
        <div className="tutorial-catalog">
                <div className="tutorial">
                        <ScrollButton label="как это работает" />
                        <h2>Сейчас мы все расскажем. Все намного проще чем вам кажется!</h2>
                        <div className="tutorial-blocks">
                                <div className="tutorial-one ">

                                </div>
                                <div className="tutorial-two">

                                </div>
                                <div className="tutorial-three">

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
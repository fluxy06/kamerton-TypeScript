import React from "preact/compat";
import './catalog.css';
import ScrollButton from "../components/ScrollButton";
const CatalogPage: React.FC = () => {
  return (
    <div id="catalog-page">
      <main className="main-content-catalog">
        <h2>О проекте</h2>
        <p>Здесь будет информация о Kamerton.</p>
      </main>
    </div>
  );
};

export default CatalogPage;

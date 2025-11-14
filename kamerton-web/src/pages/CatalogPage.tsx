import React from "preact/compat";
import './catalog.css';
import HeroSectionCatalog from "@components/HeroSectionCatalog";
import CatalogLocation from "@components/catalogLocation";
import TutorialCatalog from "@components/tutorial";

// CatalogPage Вторая страница 
const CatalogPage: React.FC = () => {
  return (
    <div id="catalog-page">
      <main className="main-content-catalog">
          <HeroSectionCatalog />
          <CatalogLocation />
          <TutorialCatalog />
      </main>
    </div>
  );
};

export default CatalogPage;

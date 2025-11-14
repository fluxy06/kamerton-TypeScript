import * as React from "react";
import './catalog.css';
import HeroSectionCatalog from "@components/HeroSectionCatalog";
import CatalogLocation from "@components/catalogLocation";
import TutorialCatalog from "@components/tutorial";
import ServicesCatalog from "@/components/servicesCatalog";
// CatalogPage Вторая страница 
const CatalogPage: React.FC = () => {
  return (
    <div id="catalog-page">
      <main className="main-content-catalog">
          <HeroSectionCatalog />
          <CatalogLocation />
          <TutorialCatalog />
          <ServicesCatalog />
      </main>
    </div>
  );
};

export default CatalogPage;

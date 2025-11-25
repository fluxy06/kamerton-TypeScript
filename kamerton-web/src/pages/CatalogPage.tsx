import * as React from "react";
import './catalog.css';
import HeroSectionCatalog from "@/components/heroSections/HeroSectionCatalog";
import CatalogLocation from "@/components/catalog/catalogLocation";
import TutorialCatalog from "@/components/welcomeComponents/tutorial";
import ServicesCatalog from "@/components/services-components/servicesCatalog";
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

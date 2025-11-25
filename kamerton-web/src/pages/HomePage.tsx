import * as React from "react";
import './home.css';
import HeroSection from "@/components/heroSections/HeroSection";
import Welcome from "@/components/welcomeComponents/welcome";
import Services from "@/components/services-components/services";
import Info from "@/components/infoBlocks/info";

const HomePage: React.FC = () => {
  return (
    <div id="home-page">
      <main className="main-content-home">
        <HeroSection />
        <Welcome />
        <Services />
        <Info />
      </main>
    </div>
  );
};

export default HomePage;

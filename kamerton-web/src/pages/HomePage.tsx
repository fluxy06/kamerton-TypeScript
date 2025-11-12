import React from "preact/compat";
import './home.css';
import HeroSection from "../components/HeroSection";
import Welcome from "../components/welcome";
import Services from "../components/services";
import Info from "../components/info";
import Footer from "../components/footer";

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

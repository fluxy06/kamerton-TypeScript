import React from "preact/compat";
import './home.css';
import HeroSection from "../components/HeroSection";
import Welcome from "../components/welcome";

const HomePage: React.FC = () => {
  return (
    <div id="home-page">
      <main className="main-content-home">
        <HeroSection />
        <Welcome />
      </main>
    </div>
  );
};

export default HomePage;

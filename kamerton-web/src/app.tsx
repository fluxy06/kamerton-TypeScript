import React from "preact/compat";
import { Router } from "preact-router";
import HomePage from "./pages/HomePage";
import './app.css'
import CatalogPage from "@pages/CatalogPage";
import Header from "@components/header";
import Footer from "@components/footer";

export function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <HomePage path="/" />
        <CatalogPage  path="/catalog" />
      </Router>
      <Footer/>
    </div>
  );
}

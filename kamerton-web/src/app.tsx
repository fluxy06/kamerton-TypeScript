import React from "preact/compat";
import { Router } from "preact-router";
import HomePage from "./pages/HomePage";
import './app.css'
import CatalogPage from "./pages/CatalogPage";
import Header from "./components/header";

export function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <HomePage path="/" />
        <CatalogPage  path="/catalog" />
      </Router>
    </div>
  );
}

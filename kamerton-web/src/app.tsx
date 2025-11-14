// React JSX runtime is configured ("jsx": "react-jsx") — explicit React import is not required
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './app.css'
import CatalogPage from "@pages/CatalogPage";
import Header from "@components/header";
import Footer from "@components/footer";

export function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

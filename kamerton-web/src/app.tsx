import { BrowserRouter as Router } from "react-router-dom";
import './app.css'
import Header from "@components/header";
import Footer from "@components/footer";
import { AnimatedRoutes } from "@hooks/AnimatedRoutes";

export function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer/>
      </Router>
    </div>
  );
}

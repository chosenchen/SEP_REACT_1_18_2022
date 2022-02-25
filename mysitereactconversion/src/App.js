import React from "react";
import Header from "./components/navbar/NavBar.js";
import Home from "./components/home/Home.js";
import Footer from "./components/footer/Footer.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contact from "./components/contact/Contact.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

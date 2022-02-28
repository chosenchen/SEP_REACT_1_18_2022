import React from "react";
import { Route, Routes } from "react-router-dom";

import './utils/style.js';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import Contact from "./components/Pages/contact";
import Projects from "./components/Pages/projects";

class App extends React.Component {

render() {
    return (
      <main>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/portfoilo" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </main>
    )
  }
}

export default App;
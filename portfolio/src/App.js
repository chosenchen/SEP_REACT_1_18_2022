import React from "react";
import { Route, Routes } from "react-router-dom";
import './bootstrap/css/bootstrap.css'
import './styles/style.css';
import './utils/style.js';
import NavBar from "./components/navbar";
import HomePage from "./components/homePage";
import Footer from "./components/footer";

class App extends React.Component {

render() {
    return (
      <main>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
          <Footer />
      </main>
    )
  }
}

export default App;
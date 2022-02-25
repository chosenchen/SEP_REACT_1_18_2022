import React from "react";
import { Route, Routes } from "react-router-dom";
import './styles/css/bootstrap.min.css';
import './styles/css/style.css';

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
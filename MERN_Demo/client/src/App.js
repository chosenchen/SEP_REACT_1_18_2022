import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <section style={{ margin: 20 }}>
          <Routes>
            <Route exact path="/" element={<h1>hello world</h1>} />
          </Routes>
        </section>
      </main>
    )
  }
}

export default App;
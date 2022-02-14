import React from "react";

import logo from "./logo.svg";
import "./App.css";

// class App extends React.Component {
//   render() {
//     return <div className="App"></div>;
//   }
// }

const App = (
  <section className="my-section" id="my_section">
    <h1>
      <span style={{ color: "red" }}>Title</span>
    </h1>
    <button onClick={() => alert("clicked")}>Button</button>
  </section>
);

export default App;

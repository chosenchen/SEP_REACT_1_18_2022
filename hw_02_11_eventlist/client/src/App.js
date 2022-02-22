import React, { Component } from "react";

import Header from "./components/Header/Header";
import CounterEvent from "./components/HOC/eventCounter";

export default class App extends Component {
    state = {
      currentPage: true,
    }

    render(){
    return (
      <div className="App">
        <Header/>
        <br/>
        <CounterEvent />
    </div>
  )}
}


import React, { Component } from "react";

import AllEvents from "./components/AllEvents/AllEvents";
import Header from "./components/Header/Header";
import ComingEvent from "./components/ComingEvent/ComingEvent";

export default class App extends Component {
    state = {
      showPage: "home",
    }
    //this.props.showPage = "home";
    
    render(){
    return (
      <div className="App">
        <Header showPage = {this.state.showPage}/>
        
    </div>
  )}
}


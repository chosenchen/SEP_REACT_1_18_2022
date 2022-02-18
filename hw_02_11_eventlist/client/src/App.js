import React, { Component } from "react";

import AllEvents from "./components/AllEvents/AllEvents";

export default class App extends Component {
    
    
    render(){
    return (
      <div className="App">
      <header>
        <h1>Event List App</h1>
      </header>

      <div className="container">
        
        <AllEvents />
      
        </div>
    
    </div>
  )}
}


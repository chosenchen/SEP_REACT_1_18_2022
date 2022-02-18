import React, { Component } from 'react';
import ComingEvent from '../ComingEvent/ComingEvent';
import AllEvents from '../AllEvents/AllEvents';
import "./Header.css";

export default class Header extends Component {
    state = {
        showPage : "home",
    }

    clickHandle1 = () => {
        this.setState ({showPage : "home"}) 
    }
    clickHandle2 = () => {
        this.setState({ showPage: "coming" }) 
    }
  render() {
    return (
      <div>
          <ul>
            <li><button onClick={this.clickHandle1}>HOME</button></li>
            <li><button onClick={this.clickHandle2}>COMING EVENT</button></li>
          </ul>
        { this.state.showPage === "home" ? ( <>
            <header>
            <h1>Event List App</h1>
            </header>
            <div className="container">
            <AllEvents showPage = {this.state.showPage}/>
            </div></>) : (<ComingEvent />)
        }
           

            
      </div>
    )
  }
}

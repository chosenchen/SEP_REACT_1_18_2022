import React from "react";
import EventList from './components/EventList/EventList.js';
import NavBar from "./components/NavBar/NavBar.js";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents.js";


class App extends React.Component {

  state = {
    view : 'eventList'
  }
  
  handleNavLinkOnClick=(e)=>{

    if(e.target.getAttribute("name") === "eventList"){
      this.setState({view: 'eventList' })
    }else if(e.target.getAttribute("name") === "upcomming"){
      this.setState({view: 'upcomming' })
    }
  }

  render() {

    return (
      <div className="App">
      <NavBar handleNavLinkOnClick={this.handleNavLinkOnClick}/>
      {this.state.view === 'eventList' && (
        <EventList />
      )}
      {this.state.view === 'upcomming' && (
        <UpcomingEvents/>
      )}
      
    </div>
    );
  }
}

export default App;

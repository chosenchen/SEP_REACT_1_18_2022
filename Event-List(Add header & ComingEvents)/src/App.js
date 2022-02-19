import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import EventList from './components/eventList/EventList.js';
import ComingEvents from './components/comingEvent/ComingEvents.js';

class App extends React.Component { 
  state = {
    view: 'eventList'
  }

  handleHeaderOnClick = (e) => {
    // e.prevenDefault();
    if (e.target.getAttribute('name') === 'eventList') {
      this.setState({view: 'eventList'})
    } else if (e.target.getAttribute('name') === 'comingEvents') {
      this.setState({view: 'comingEvents'})
    }   
  }

  render(){
    return (
        <div className="App">
          <Header handleHeaderOnClick={this.handleHeaderOnClick} />
          {this.state.view === 'eventList' && (
            <EventList />
          )} 
          {this.state.view === 'comingEvents' && (
            <ComingEvents />
          )} 
        </div>        
    );
  }
}

export default App;

